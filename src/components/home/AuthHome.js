import { useSelector } from 'react-redux';
import { selectUserEmail, selectUserName } from 'redux/auth/authSelectors';
import css from './home.module.css';
import { Link } from 'react-router-dom';
import imgPhoneBook from 'images/phone-book.jpg';

export const AuthHome = () => {
  const userName = useSelector(selectUserName);
  const userEmail = useSelector(selectUserEmail);
  return (
    <div className={css.home_container}>
      <img src={imgPhoneBook} alt="phone-book" width="240"></img>
      <div className={css.home_text_container}>
        <h1>Welcome to the most convenient notebook, {userName}!</h1>
        <p>{userEmail}</p>
        <p className={css.home_contact_text}> Manage your contacts here</p>
        <ul>
          <li>
            <Link className={css.home_button} to="/contacts" id="contacts">
              Contacts
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
