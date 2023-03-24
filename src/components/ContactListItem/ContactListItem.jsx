import React from 'react';
import { useDeleteContactMutation } from 'redux/contacts/contactsSlice';
import PropTypes from 'prop-types';

export const ContactsListItem = ({ name, number, id }) => {
  const [deleteContact] = useDeleteContactMutation();

  return (
    <li>
      {name}: {number}
      <button type="button" id={id} onClick={() => deleteContact(id)}>
        Delete
      </button>
    </li>
  );
};

ContactsListItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};
