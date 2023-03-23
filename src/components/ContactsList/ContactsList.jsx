import React from 'react';
import { useSelector } from 'react-redux';
import { Contacts } from './ContactsList.styled';
import { ContactsListItem } from 'components/ContactListItem/ContactListItem';
import { getFilter, getContacts } from 'redux/selectors';

const ContactsList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const normalizedFilter = filter.toLowerCase();
  const visibleContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter)
  );

  return contacts.length === 0 ? (
    `No contacts yet`
  ) : visibleContacts.length === 0 ? (
    `No matches founded`
  ) : (
    <Contacts>
      {visibleContacts.map(({ id, name, phone }) => (
        <ContactsListItem key={id} id={id} name={name} phone={phone} />
      ))}
    </Contacts>
  );
};

export default ContactsList;
