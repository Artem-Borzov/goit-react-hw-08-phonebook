import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const NavArea = styled.nav``;

export const NavUl = styled.ul`
  display: flex;
  li:not(:last-child) {
    margin-right: 20px;
  }
`;

export const NavLI = styled.li`
  text-decoration: none;
`;

export const NavLink = styled(Link)`
  text-decoration: none;
  :visited {
    color: inherit;
  }
  :hover {
    color: green;
  }
`;
