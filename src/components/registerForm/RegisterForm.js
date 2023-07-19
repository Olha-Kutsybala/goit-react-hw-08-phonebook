import { useDispatch } from 'react-redux';
import { register } from 'redux/authOperations';

export const RegisterForm = e => {
  const form = e.currentTarget;
  const dispatch = useDispatch();
  const handleSubmit = ({ name, email, password }) => {
    dispatch(register({ name, email, password })).then(response => {
      if (response.meta.requestStatus === 'fulfilled') {
        form.reset();
        alert('success');
        return;
      }
      alert('error');
    });
  };

  return (
    <form onSubmit={handleSubmit} autoComplete="off">
      <label>
        Username
        <input type="text" name="name" />
      </label>
      <label>
        Email
        <input type="email" name="email" />
      </label>
      <label>
        Password
        <input type="password" name="password" />
      </label>
      <button type="submit">Register</button>
    </form>
  );
};
