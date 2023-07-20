import AuthNav from 'components/authNav/authNav.js';
import { UserMenu } from 'components/userMenu/UserMenu';
import Navigation from 'components/navigation';
import { useAuth } from 'hooks/useAuth';
import css from './appBar.module.css';

export const AppBar = () => {
  const { isLoggedIn } = useAuth();

  return (
    <header className={css.appBar_container}>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </header>
  );
};
