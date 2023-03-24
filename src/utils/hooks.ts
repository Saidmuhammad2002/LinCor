import jwtDecode from 'jwt-decode';
import { useSelector } from 'react-redux';
import { selectCurrentToken } from './../pages/auth/authSlice';

const useAuth = () => {
  const token = useSelector(selectCurrentToken);

  if (token) {
    const decoded: any = jwtDecode(token);
    // TO DO: add type for decoded
    // TO DO: add more info from token and return it email is not enough
    const { email } = decoded.UserInfo;

    return { email };
  }

  return { email: '' };
};
export default useAuth;
