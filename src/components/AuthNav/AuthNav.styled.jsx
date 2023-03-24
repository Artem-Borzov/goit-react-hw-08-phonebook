import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const AuthNavArea = styled.nav``;

export const AuthNavUl = styled.ul`
  display: flex;
  li:not(:last-child) {
    margin-right: 20px;
  }
`;

export const AuthNavLI = styled.li`
  text-decoration: none;
`;

export const AuthNaviLink = styled(NavLink)`
  text-decoration: none;
  :visited {
    color: inherit;
  }
  :hover {
    color: green;
  }
`;
