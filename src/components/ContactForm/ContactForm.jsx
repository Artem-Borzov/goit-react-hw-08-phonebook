import React from 'react';
import { useAddContactMutation } from 'redux/contacts/contactsSlice';
import { Form } from './Form/Form';

export const ContactForm = ({ data }) => {
  const [addContact] = useAddContactMutation();
  // const { data: contacts } = useFetchContactsQuery();

  const formSubmitHandler = contactToAdd => {
    const nameMatches = data.find(
      contact => contact.name.toLowerCase() === contactToAdd.name.toLowerCase()
    );

    if (nameMatches) {
      return alert(`${contactToAdd.name} is already in contacts.`);
    }

    addContact(contactToAdd);
    alert('You add new contact.');
  };

  return <Form onSubmit={formSubmitHandler} btnText="Add contact" />;
};
