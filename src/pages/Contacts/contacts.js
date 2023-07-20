import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { selectError, selectIsLoading } from 'redux/selectors';
import { useContacts } from 'hooks/useContacts';
import Form from 'components/form';
import ContactList from 'components/contactList';
import Filter from 'components/filter';

export default function Contacts() {
  const { contacts, fetchContacts } = useContacts();

  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    fetchContacts();
  }, [fetchContacts]);

  return (
    <>
      <h1>Your contacts</h1>
      <Form />
      {isLoading && !error && <b>Request in progress...</b>}
      {contacts.length >= 1 && <Filter />}
      {contacts.length > 0 ? (
        <ContactList />
      ) : (
        <p>Your phonebook is empty. Please add contact.</p>
      )}
      <ContactList />
    </>
  );
}
