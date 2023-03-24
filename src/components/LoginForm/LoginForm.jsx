import * as React from 'react';
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/authOperations';
import { useAuth } from 'hooks/useAuth';
import { Form, FormLabel, FormInput } from './LoginForm.styled';

export const LoginForm = () => {
  const dispatch = useDispatch();
  const { error } = useAuth();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;

    if (error) {
      alert('No such user');
    }

    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };
  return (
    <Form autoComplete="off" onSubmit={handleSubmit}>
      <FormLabel>
        <span>Email:</span>
        <FormInput id="email" name="email" type="email" />
      </FormLabel>
      <FormLabel>
        <span>Password:</span>
        <FormInput id="password" name="password" type="password" />
      </FormLabel>
      <button type="submit">Log in</button>
    </Form>
  );
};
