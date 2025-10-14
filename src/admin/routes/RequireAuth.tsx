import { Navigate, useLocation } from 'react-router-dom';
import { useUserState } from '@admin/context/UserContext';

interface RequireAuthProps {
  children: JSX.Element;
}

export default function RequireAuth({ children }: RequireAuthProps) {
  const location = useLocation();
  const { isAuthenticated } = useUserState();

  if (!isAuthenticated) {
    return <Navigate to="/login" state={{ from: location.pathname + location.search }} replace />;
  }

  return children;
}
