import { AuthHome } from 'components/home/AuthHome';
import { UnAuthHome } from 'components/home/UnAuthHome';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/authSelectors';

const Home = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return isLoggedIn ? <AuthHome /> : <UnAuthHome />;
};

export default Home;
