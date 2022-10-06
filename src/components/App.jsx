import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import ContactList from './ContactList';
import SignUpForm from './ContactForm';
import Filter from './Filter';
import { useGetContactsQuery } from 'redux/contactsAPI';

export const App = () => {
  const { data, error, isLoading } = useGetContactsQuery();

  // const changeFilter = event => {
  //   dispatch(addFilterValue(event.currentTarget.value.toLowerCase().trim()));
  // };

  return (
    <div>
      <h1>Phonebook</h1>
      <SignUpForm />
      <h2>Contacts {isLoading && !error && <b>Request in progress...</b>}</h2>
      <Filter
      //   onChange=
      //   {
      //   changeFilter
      // }
      />
      {error && <p>{error}</p>}
      {data.length > 0 ? (
        <ContactList contacts={data} />
      ) : (
        <p>No any contact! add new</p>
      )}
    </div>
  );
};
