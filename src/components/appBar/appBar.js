import AuthNav from 'components/authNav/authNav.js';
import { UserMenu } from 'components/userMenu/UserMenu';
import Navigation from 'components/navigation';
import { useAuth } from 'hooks/useAuth';

export const AppBar = () => {
  const { isLoggedIn } = useAuth();

  return (
    <header>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </header>
  );
};
