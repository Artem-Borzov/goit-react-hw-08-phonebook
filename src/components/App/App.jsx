import AddContactForm from 'components/AddContactForm/AddContactForm';
import ContactsList from 'components/ContactsList/ContactsList';
import { Container, Title } from './App.styled';
import Filter from 'components/Filter/Filter';
import { Loader } from 'components/Loader/Loader';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/operations';
import { getError, getIsLoading } from 'redux/selectors';

export const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Container>
      <AddContactForm />
      <Title>Contacts</Title>
      <Filter />
      <ContactsList />
      {isLoading && !error && <Loader />}
    </Container>
  );
};
