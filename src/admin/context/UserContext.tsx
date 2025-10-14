// ===== File: context/UserContext.tsx =====
import React from 'react';
import axios, { AxiosError } from 'axios';
import { jwtDecode, JwtPayload } from 'jwt-decode';
import { NavigateFunction } from 'react-router-dom';
import config from '@admin/config';
import type { Role, TokenData } from 'types';

const ADMIN_BASE_PATH = (process.env.NEXT_PUBLIC_ADMIN_BASE_PATH || '/admin').replace(/\/$/, '');

export interface AuthResponseDto {
  id: number;
  email: string;
  name?: string | null;
  role: Role;
  accessToken: string;
  refreshToken: string;
}

export interface RefreshResponseDto {
  accessToken: string;
}

type UserAction = 'LOGIN_SUCCESS' | 'REFRESH_TOKEN_SUCCESS' | 'SIGN_OUT_SUCCESS' | 'AUTH_FAILURE';

interface Action {
  type: UserAction;
  payload?: any;
}

interface UserState {
  isFetching: boolean;
  errorMessage: string;
  accessToken: string | null;
  refreshToken: string | null;
  currentUser: TokenData | null;
  isAuthenticated: boolean;
}

const initialState: UserState = {
  isFetching: false,
  errorMessage: '',
  accessToken: null,
  refreshToken: null,
  currentUser: null,
  isAuthenticated: false
};

function createInitialUserState(base: UserState): UserState {
  if (typeof window === 'undefined') {
    return base;
  }
  const accessToken = localStorage.getItem('accessToken');
  const refreshToken = localStorage.getItem('refreshToken');
  let currentUser: TokenData | null = null;
  const raw = localStorage.getItem('user');
  if (raw) {
    try {
      currentUser = JSON.parse(raw) as TokenData;
    } catch {
      currentUser = null;
    }
  }
  return {
    ...base,
    accessToken: accessToken ?? null,
    refreshToken: refreshToken ?? null,
    currentUser,
    isAuthenticated: hasValidRefreshToken(refreshToken)
  };
}

const userReducer = (state: UserState, action: Action): UserState => {
  switch (action.type) {
    case 'LOGIN_SUCCESS':
      return { ...state, ...action.payload, isAuthenticated: true, isFetching: false, errorMessage: '' };
    case 'REFRESH_TOKEN_SUCCESS':
      return { ...state, ...action.payload };
    case 'SIGN_OUT_SUCCESS':
      return { ...initialState, accessToken: null, refreshToken: null, currentUser: null, isAuthenticated: false };
    case 'AUTH_FAILURE':
      return { ...state, isFetching: false, errorMessage: action.payload ?? 'Auth error' };
    default:
      return state;
  }
};

type UserDispatch = React.Dispatch<Action>;
const noopDispatch: UserDispatch = () => null;

const UserContext = React.createContext<{ state: UserState; dispatch: UserDispatch }>({
  state: initialState,
  dispatch: noopDispatch
});

export const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = React.useReducer(userReducer, initialState, createInitialUserState);

  React.useEffect(() => setInterceptor(dispatch), []);

  return <UserContext.Provider value={{ state, dispatch }}>{children}</UserContext.Provider>;
};

export const useUserState = (): UserState => React.useContext(UserContext).state;
export const useUserDispatch = (): UserDispatch => React.useContext(UserContext).dispatch;

/** ===== AUTH API (login / refresh / logout) ===== */
export async function loginUser(
  dispatch: UserDispatch,
  email: string,
  password: string,
  setLoading: (v: boolean) => void,
  setError: (v: string) => void,
  navigate: NavigateFunction,
  redirectPath?: string
): Promise<void> {
  setError('');
  setLoading(true);
  if (!email || !password) {
    setLoading(false);
    dispatch({ type: 'AUTH_FAILURE', payload: 'Введите email и пароль' });
    return;
  }

  try {
    // запрос без CORS-прокси: напрямую на API
    const { data } = await axios.post(`${config.baseURLApi}/auth/signin`, { email, password }, { withCredentials: false });
    const loginResponse = data as AuthResponseDto;

    const { accessToken, refreshToken, user } = receiveToken(loginResponse);

    dispatch({
      type: 'LOGIN_SUCCESS',
      payload: { accessToken, refreshToken, currentUser: user }
    });
    setLoading(false);
    navigate(redirectPath || '/', { replace: true });
  } catch (err) {
    setLoading(false);
    if (err instanceof AxiosError && err.response?.status === 401) {
      setError('Неверный email или пароль');
    } else {
      setError((err as any)?.response?.data?.message ?? 'Ошибка сервера');
    }
  }
}

export async function signOut(dispatch: UserDispatch, navigate: NavigateFunction): Promise<void> {
  try {
    await axios.post('/api/auth/logout', {}, { withCredentials: false });
  } catch {
    // игнорируем ошибку
  }
  localStorage.removeItem('accessToken');
  localStorage.removeItem('refreshToken');
  localStorage.removeItem('user');
  dispatch({ type: 'SIGN_OUT_SUCCESS' });
  navigate('/login');
}

async function refreshAccessToken(dispatch: UserDispatch, rToken: string) {
  const { data } = await axios.post('/api/auth/refresh', { refreshToken: rToken }, { withCredentials: false });
  const refreshResponse = data as RefreshResponseDto;
  const accessToken = refreshResponse.accessToken;
  const decoded = jwtDecode(accessToken) as TokenData;

  localStorage.setItem('accessToken', accessToken);
  localStorage.setItem('user', JSON.stringify(decoded));

  dispatch({
    type: 'REFRESH_TOKEN_SUCCESS',
    payload: { accessToken, currentUser: decoded }
  });
}

/** ===== Axios interceptors & helpers ===== */
function setInterceptor(dispatch: UserDispatch) {
  axios.interceptors.request.use(
    (config) => {
      const token = localStorage.getItem('accessToken');
      if (token) config.headers['Authorization'] = `Bearer ${token}`;
      return config;
    },
    (error) => Promise.reject(error)
  );

  axios.interceptors.response.use(
    (response) => response,
    async (error) => {
      const originalConfig = error.config || {};
      const rToken = localStorage.getItem('refreshToken');

      if (
        error?.response?.status === 401 &&
        !originalConfig._retry &&
        rToken &&
        !(String(originalConfig.url) || '').endsWith('/api/auth/refresh')
      ) {
        originalConfig._retry = true;
        try {
          await refreshAccessToken(dispatch, rToken);
          return axios(originalConfig);
        } catch (e) {
          localStorage.removeItem('accessToken');
          localStorage.removeItem('refreshToken');
          localStorage.removeItem('user');
          window.location.href = `${ADMIN_BASE_PATH}/login`;
          return Promise.reject(e);
        }
      }
      return Promise.reject(error);
    }
  );
}

function hasValidRefreshToken(token?: string | null): boolean {
  const value = token ?? (typeof window !== 'undefined' ? localStorage.getItem('refreshToken') : null);
  if (!value) return false;
  try {
    const decoded = jwtDecode(value) as JwtPayload | null;
    if (!decoded?.exp) return false;
    const now = Date.now() / 1000;
    return now < decoded.exp;
  } catch {
    return false;
  }
}

function receiveToken(data: AuthResponseDto): {
  accessToken: string;
  refreshToken: string;
  user: TokenData;
} {
  const { accessToken, refreshToken, id, email, name, role } = data;
  const user = jwtDecode(accessToken) as TokenData;
  user.id = id;
  user.email = email;
  user.name = name;
  user.role = role;

  localStorage.setItem('accessToken', accessToken);
  localStorage.setItem('refreshToken', refreshToken);
  localStorage.setItem('user', JSON.stringify(user));

  return { accessToken, refreshToken, user };
}
