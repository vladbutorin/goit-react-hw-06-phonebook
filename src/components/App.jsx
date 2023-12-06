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
    // You can dispatch any initial actions here if needed
  }, []);

  const handleAddContact = (name, number) => {
    // Dispatch the addContact action
    dispatch(addContact({ id: nanoid(), name, number }));
  };

  const handleDeleteContact = (id) => {
    // Dispatch the deleteContact action
    dispatch(deleteContact(id));
  };

  const handleFilterChange = (e) => {
    // Dispatch the setFilter action
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
