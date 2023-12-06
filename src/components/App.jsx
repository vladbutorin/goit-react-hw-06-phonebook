import { nanoid } from 'nanoid';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContact, deleteContact, setFilter } from './contactsSlice/contactsSlice';
import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList';
import { GlobalStyle } from './GlobalStyle ';

const App = () => {
  const dispatch = useDispatch();
  const contacts = useSelector((state) => state.items);
  const filter = useSelector((state) => state.filter);

  useEffect(() => {

  }, []);

  const handleAddContact = (name, number) => {

    dispatch(addContact({ id: nanoid(), name, number }));
  };

  const handleDeleteContact = (id) => {

    dispatch(deleteContact(id));
  };

  const handleFilterChange = (e) => {

    dispatch(setFilter(e.target.value));
  };

  const getFilteredContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm onAddContact={handleAddContact} />
      <h2>Contacts</h2>
      <Filter
        title="Find contacts by name: "
        value={filter}
        onChange={handleFilterChange}
      />
      <ContactList
        contacts={getFilteredContacts()}
        onDeleteContact={handleDeleteContact}
      />
      <GlobalStyle />
    </div>
  );
};

export default App;
