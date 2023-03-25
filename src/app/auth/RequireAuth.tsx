import { useAuth } from '@utils/hooks';
import { Navigate, Outlet, useLocation } from 'react-router-dom';

const RequireAuth = () => {
  let { email } = useAuth();
  let location = useLocation();

  const content = email ? (
    <Outlet />
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );

  return content;
};
export default RequireAuth;
