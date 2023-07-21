import css from './Form.module.css';
import { useState } from 'react';
import toast from 'react-hot-toast';
import { useContacts } from 'hooks/useContacts';

const Form = () => {
  const { contacts, addContact } = useContacts();

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChange = e => {
    const { name, value } = e.target;
    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'number':
        setNumber(value);
        break;

      default:
        return;
    }
  };
  const handleSubmit = event => {
    event.preventDefault();

    if (name.trim() === '' || number.trim() === '') {
      alert("Enter the contact's name and number phone!");
      return;
    }
    const isExist = contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );

    if (isExist) {
      toast.error(`${number} is already in contacts.`);
      return;
    }

    addContact({ name, number });
    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <div className={css.form}>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name" className={css.label}>
          Name
        </label>
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          minLength={2}
          onChange={handleChange}
          value={name}
          placeholder="Enter here"
          className={css.input}
        />

        <label htmlFor="number" className={css.label}>
          Number
        </label>

        <input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          onChange={handleChange}
          value={number}
          placeholder="111-11-11"
          className={css.input}
        />

        <button type="submit" className={css.form_button}>
          Add contact
        </button>
      </form>
    </div>
  );
};

export default Form;
