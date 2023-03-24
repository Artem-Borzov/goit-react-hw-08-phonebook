import { AuthNav } from 'components/AuthNav/AuthNav';
import { Navigation } from 'components/Navigation/Navigation';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { useAuth } from 'hooks/useAuth';
import { AuthArea, Header } from './AppBar.styled';

export const AppBar = () => {
  const { isLoggedIn } = useAuth();

  return (
    <Header>
      <Navigation />
      {<h2>Phonebook</h2>}
      <AuthArea>{isLoggedIn ? <UserMenu /> : <AuthNav />}</AuthArea>
    </Header>
  );
};
