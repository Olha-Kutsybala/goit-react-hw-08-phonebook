import css from '../registerForm/RegisterForm.module.css';
import { useState } from 'react';
import { useAuth } from 'hooks/useAuth';

export const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useAuth();

  const handleChange = e => {
    const { name, value } = e.target;
    switch (name) {
      case 'email':
        setEmail(value);
        break;

      case 'password':
        setPassword(value);
        break;

      default:
        return;
    }
  };

  const handleSubmit = event => {
    event.preventDefault();
    login({
      email,
      password,
    });
    reset();
  };

  const reset = () => {
    setEmail('');
    setPassword('');
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
            onChange={handleChange}
            value={email}
            // pattern="^[^@\\s]+@[^@\\s]+\\.[^@\\s]+$"
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
            onChange={handleChange}
            value={password}
          />
        </label>
        <button type="submit" className={css.registerForm_button}>
          Log In
        </button>
      </form>
    </div>
  );
};
