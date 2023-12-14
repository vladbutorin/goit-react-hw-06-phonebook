import { useState } from 'react';
import { nanoid } from 'nanoid';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts, addContact } from '../../redux/slice';
import { Form, Label, Input, Button } from './ContactForm.styled';

export const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();

  const handleChange = event => {
    const { name, value } = event.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = event => {
    event.preventDefault();
    const contact = {
      id: nanoid(),
      name,
      number,
    };

    const enterContacts = contacts.some(
      contact =>
        (contact.name === name.toLowerCase() && contact.number === number) ||
        contact.number === number
    );
    enterContacts
      ? alert(`${name} or ${number} is already in contacts`)
      : dispatch(addContact(contact));

    setName('');
    setNumber('');
  };

  return (
    <Form onSubmit={handleSubmit}>
      <div>
        <Label>Name:</Label>
        <Input
          type="text"
          name="name"
          value={name}
          onChange={handleChange} 
          required
        />

        <Label>Number:</Label>
        <Input
          type="tel"
          name="number"
          value={number}
          onChange={handleChange} 
          required
        />
      </div>
      <Button type="submit">Add contact</Button>
    </Form>
  );
};
