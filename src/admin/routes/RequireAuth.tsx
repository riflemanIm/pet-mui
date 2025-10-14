import { Navigate, useLocation } from 'react-router-dom';
import { useUserState } from '@admin/context/UserContext';

export default function RequireAuth({ children }: { children: React.ReactNode }) {
  const location = useLocation();
  const { isAuthenticated } = useUserState();

  if (!isAuthenticated) {
    return <Navigate to="/login" state={{ from: location.pathname + location.search }} replace />;
  }

  return children;
}
