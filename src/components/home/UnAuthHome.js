import { Link } from 'react-router-dom';

export const UnAuthHome = () => {
  return (
    <div>
      <h1>Welcome!</h1>
      <p>Your Contacts!</p>
      <ul>
        <li>
          <Link to="login">Sign in</Link>
          <Link to="register">Sign up</Link>
        </li>
      </ul>
    </div>
  );
};
