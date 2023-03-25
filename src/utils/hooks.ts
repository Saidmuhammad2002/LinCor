import { selectCurrentToken } from '@app/auth/authSlice';
import jwtDecode from 'jwt-decode';
import { useSelector } from 'react-redux';

export const useAuth = () => {
  const token = useSelector(selectCurrentToken);

  if (token) {
    const decoded: any = jwtDecode(token);
    // TO DO: add type for decoded
    // TO DO: add more info from token and return it email is not enough
    const { email, username } = decoded.UserInfo;

    return { email, username };
  }

  return { email: '', username: '' };
};
