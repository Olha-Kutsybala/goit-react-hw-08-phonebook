import { Link } from 'react-router-dom';
import css from './home.module.css';
import imgPhoneBook from 'images/phone-book.jpg';

export const UnAuthHome = () => {
  return (
    <div className={css.home_container}>
      <img
        src={imgPhoneBook}
        alt="phone-book"
        width="200"
        className={css.home_image}
      ></img>
      <div className={css.home_text_container}>
        <h1>
          Welcome to the most convenient phonebook! <br />
          Register and use!
        </h1>
        <ul>
          <li className={css.home_button_container}>
            <Link className={css.home_button} to="login">
              Sign in
            </Link>
            <Link className={css.home_button} to="register">
              Sign up
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
