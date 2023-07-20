import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/authOperations';
import css from '../registerForm/RegisterForm.module.css';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <div className={css.registerForm_container}>
      <form
        onSubmit={handleSubmit}
        autoComplete="off"
        className={css.registerForm}
      >
        <label>
          <input
            type="email"
            name="email"
            required
            className={css.registerForm_input}
            placeholder="Email"
          />
        </label>
        <label>
          <input
            type="password"
            name="password"
            required
            minLength={8}
            className={css.registerForm_input}
            placeholder="Password"
          />
        </label>
        <button type="submit" className={css.registerForm_button}>
          Log In
        </button>
      </form>
    </div>
  );
};
