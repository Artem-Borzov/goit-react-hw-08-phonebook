import React from 'react';
import { useAuth } from 'hooks/useAuth';
import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/authOperations';
import { WelcomeArea } from './UserMenu.styled';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <WelcomeArea>
      <p>Welcome, {user.name}!</p>
      <button onClick={() => dispatch(logOut())}>Logout</button>
    </WelcomeArea>
  );
};
