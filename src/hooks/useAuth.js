import { useDispatch, useSelector } from 'react-redux';
import {
  selectIsLoggedIn,
  selectIsRefreshing,
  selectUser,
} from 'redux/auth/authSelectors';
import * as authOperations from 'redux/auth/authOperations';

export const useAuth = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isRefreshing = useSelector(selectIsRefreshing);
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  const register = data => {
    dispatch(authOperations.register(data));
  };

  const login = data => {
    dispatch(authOperations.logIn(data));
  };

  return {
    isLoggedIn,
    isRefreshing,
    user,
    register,
    login,
  };
};
