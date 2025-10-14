import { lazy } from 'react';

// project import
import Loadable from '@admin/components/Loadable';
import MinimalLayout from '@admin/layout/MinimalLayout';

// render - login
const AuthLogin = Loadable(lazy(() => import('@admin/pages/authentication/login')));
const AuthRegister = Loadable(lazy(() => import('@admin/pages/authentication/register')));

// ==============================|| AUTH ROUTING ||============================== //

const LoginRoutes = {
  path: '/',
  element: <MinimalLayout />,
  children: [
    {
      path: '/login',
      element: <AuthLogin />
    },
    {
      path: '/register',
      element: <AuthRegister />
    }
  ]
};

export default LoginRoutes;
