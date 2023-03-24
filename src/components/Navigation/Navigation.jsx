import { useAuth } from 'hooks/useAuth';
import { NavArea, NavUl, NavLI, NavLink } from './Navigation.styled';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <NavArea>
      <NavUl>
        <NavLI>
          <NavLink to="/">Home</NavLink>
        </NavLI>
        {isLoggedIn && (
          <NavLI>
            <NavLink to="/contacts">Contacts</NavLink>
          </NavLI>
        )}
      </NavUl>
    </NavArea>
  );
};
