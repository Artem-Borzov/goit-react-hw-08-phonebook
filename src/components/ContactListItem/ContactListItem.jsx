import React from 'react';
import { Contact, DeleteBtn } from './ContactListItem.styled';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/operations';

export const ContactsListItem = ({ name, phone, id }) => {
  const dispatch = useDispatch();
  return (
    <Contact>
      {name}: {phone}
      <DeleteBtn
        type="button"
        id={id}
        onClick={() => dispatch(deleteContact(id))}
      >
        Delete
      </DeleteBtn>
    </Contact>
  );
};

ContactsListItem.propTypes = {
  name: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};
