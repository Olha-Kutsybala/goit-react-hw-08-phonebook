import { lazy, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useAuth } from 'hooks/useAuth';
import { refreshUser } from 'redux/authOperations';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout';
import { RestrictedRoute } from './RestrictedRoute';
import { PrivateRoute } from './PrivateRoute';

const App = () => {
  const HomePage = lazy(() => import('../pages/Home/Home'));
  const RegisterPage = lazy(() => import('../pages/Register/Register'));
  const LoginPage = lazy(() => import('../pages/Login/Login'));
  const ContactsPage = lazy(() => import('../pages/Contacts/contacts'));
  // const ContactsPage = lazy(() => import('../pages/Contacts/contacts'));

  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    refreshUser();
  }, [dispatch]);

  return isRefreshing ? (
    <b>Refreshing user...</b>
  ) : (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route
          path="/register"
          element={
            <RestrictedRoute
              redirectTo="/contacts"
              component={<RegisterPage />}
            />
          }
        />
        <Route
          path="/login"
          element={
            <RestrictedRoute redirectTo="/contacts" component={<LoginPage />} />
          }
        />
        <Route
          path="/tasks"
          element={
            <PrivateRoute redirectTo="/login" component={<ContactsPage />} />
          }
        />
      </Route>
    </Routes>
  );

  // return (
  //   <div className={css.container}>
  //     <h1 className={css.title}>Phonebook</h1>
  //     <Form />
  //     {isLoading && !error && <b>Request in progress...</b>}
  //     <h2 className={css.title}>Contacts</h2>
  //     {contacts.length >= 1 && <Filter />}
  //     {contacts.length > 0 ? (
  //       <ContactList />
  //     ) : (
  //       <p>Your phonebook is empty. Please add contact.</p>
  //     )}
  //     <Toaster position="top-right" toastOptions={{ duration: 1500 }} />
  //   </div>
  // );
};

export default App;
