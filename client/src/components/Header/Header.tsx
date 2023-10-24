import logo from '../../assets/bike-rental-logo.jpg';
import {
  NavbarContainer,
  StyledLink,
  StyledLinkContainer,
  StyledLogo,
} from './Header.styled';

const Header = () => {
  return (
    <NavbarContainer>
      <StyledLogo src={logo} alt="logo" />

      <StyledLinkContainer>
        <StyledLink to={'/'}>Home</StyledLink>
        <StyledLink to={'/bikes'}>Bikes</StyledLink>
        <StyledLink to={'/users'}>Users</StyledLink>
      </StyledLinkContainer>

      <StyledLinkContainer>
        <StyledLink to={'/login'}>Login</StyledLink>
        <StyledLink to={'/register'}>Register</StyledLink>
      </StyledLinkContainer>
    </NavbarContainer>
  );
};

export default Header;
