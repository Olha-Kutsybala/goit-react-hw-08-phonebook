import { useAuth } from 'hooks/useAuth';
import { NavLink } from 'react-router-dom';
import css from './navigation.module.css';

const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <nav className={css.navigation}>
      <NavLink className={css.navigation_link} to="/">
        Home
      </NavLink>
      {isLoggedIn && (
        <NavLink className={css.navigation_link} to="/contacts" id="contacts">
          Contacts
        </NavLink>
      )}
    </nav>
  );
};

export default Navigation;
