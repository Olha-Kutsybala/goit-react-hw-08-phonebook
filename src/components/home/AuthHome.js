import { useSelector } from 'react-redux';
import { selectUserEmail, selectUserName } from 'redux/authSelectors';

export const AuthHome = () => {
  const userName = useSelector(selectUserName);
  const userEmail = useSelector(selectUserEmail);
  return (
    <div>
      <h1>Welcome!</h1>
      <h2>{userName}</h2>
      <p>{userEmail}</p>
    </div>
  );
};
