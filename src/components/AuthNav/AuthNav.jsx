import { AuthNaviLink, AuthNavUl, AuthNavLI } from './AuthNav.styled';

export const AuthNav = () => {
  return (
    <AuthNavUl>
      <AuthNavLI>
        <AuthNaviLink to="/register">Register</AuthNaviLink>
      </AuthNavLI>
      <AuthNavLI>
        <AuthNaviLink to="/login">Log in</AuthNaviLink>
      </AuthNavLI>
    </AuthNavUl>
  );
};
