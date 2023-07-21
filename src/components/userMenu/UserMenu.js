import { useAuth } from 'hooks/useAuth';
import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/authOperations';
import css from './userMenu.module.css';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <div className={css.userMenu}>
      <p>Welcome, {user.name}!</p>
      <button
        className={css.logout_button}
        type="button"
        onClick={() => dispatch(logOut())}
      >
        LogOut
      </button>
    </div>
  );
};
