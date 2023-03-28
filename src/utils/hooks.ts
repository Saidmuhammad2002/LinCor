import { useGetUserQuery } from '@/app/auth/authApiSlice';
import { logOut, selectCurrentToken } from '@app/auth/authSlice';
import { useDispatch, useSelector } from 'react-redux';

export const useAuth = () => {
  const token = useSelector(selectCurrentToken);

  const dispatch = useDispatch();
  const logout = () => dispatch(logOut());
  const { data } = useGetUserQuery();

  if (token) {
    if (!data) return null;
    return { ...data, logout };
  }

  return null;
};
