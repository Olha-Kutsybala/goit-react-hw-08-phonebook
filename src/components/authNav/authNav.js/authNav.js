import { NavLink } from 'react-router-dom';
import css from './authNav.module.css';

const AuthNav = () => {
  return (
    <div className={css.authNav_container}>
      <NavLink to="/register">Register</NavLink>
      <NavLink to="/login">Log In</NavLink>
    </div>
  );
};

export default AuthNav;
