import { useAuth } from 'hooks/useAuth';
import { useDispatch } from 'react-redux';
import { signup } from 'redux/auth/authOperations';
import { Form, FormInput, FormLabel } from './RegisterForm.styled';

export const RegisterForm = () => {
  const dispatch = useDispatch();
  const { error } = useAuth();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    if (error) {
      alert('User name or email already used');
    }

    dispatch(
      signup({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );

    form.reset();
  };

  return (
    <Form autoComplete="off" onSubmit={handleSubmit}>
      <FormLabel>
        <span>Name:</span>
        <FormInput id="name" name="name" type="text" />
      </FormLabel>
      <FormLabel>
        <span>Email:</span>
        <FormInput id="email" name="email" type="email" />
      </FormLabel>
      <FormLabel>
        <span>Password:</span>
        <FormInput id="password" name="password" type="password" />
      </FormLabel>
      <button type="submit">Register</button>
    </Form>
  );
};
