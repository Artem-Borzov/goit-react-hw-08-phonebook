import React from 'react';
import { useSelector } from 'react-redux';
import { useFetchContactsQuery } from 'redux/contacts/contactsSlice';
import { ContactsListItem } from 'components/ContactListItem/ContactListItem';
import { getFilter } from 'redux/filter/filterSelectors';

export const ContactsList = () => {
  const { data: contacts } = useFetchContactsQuery();
  const filter = useSelector(getFilter);

  const visibleContacts = !contacts
    ? []
    : contacts.filter(contact =>
        contact.name.toLowerCase().includes(filter.toLowerCase())
      );

  return (
    <>
      {contacts?.length === 0 ? (
        <p>No contacts yet</p>
      ) : (
        <>
          <p>Total contacts: {visibleContacts.length}</p>
          <ul>
            {visibleContacts.map(({ id, name, number }) => (
              <ContactsListItem key={id} id={id} name={name} number={number} />
            ))}
          </ul>
        </>
      )}
    </>
  );
};
