import { useSelector } from 'react-redux';
import { getUserEmail, getUserName } from 'redux/authSelectors';

export const AuthHome = () => {
  const userName = useSelector(getUserName);
  const userEmail = useSelector(getUserEmail);
  return (
    <div>
      <h1>Welcome!</h1>
      <h2>{userName}</h2>
      <p>{userEmail}</p>
    </div>
  );
};
