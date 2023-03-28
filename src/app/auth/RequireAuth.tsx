import { useAuth } from '@utils/hooks';
import { Navigate, Outlet, useLocation } from 'react-router-dom';

const RequireAuth = () => {
  let user = useAuth();
  let location = useLocation();

  const content = user ? (
    <Outlet />
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );

  return content;
};
export default RequireAuth;
