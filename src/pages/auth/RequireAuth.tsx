import { useLocation, Navigate, Outlet } from 'react-router-dom';
import useAuth from './../../utils/hooks';

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
