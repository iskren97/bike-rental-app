import logo from '../../assets/bike-rental-logo.jpg';
import {
  NavbarContainer,
  StyledLink,
  StyledLinkContainer,
  StyledLogo,
  StyledLogout,
  StyledScrollLink,
} from './Header.styled';
import { useNavigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';

// Header or Navbar component is the top component of the page
// featuring normal things like Logo, Links
// also some logic for different user scenarios

const Header = () => {
  const [cookies, setCookies] = useCookies(['access_token', 'user_role']);
  const navigate = useNavigate();

  const handleLogout = () => {
    setCookies('access_token', '');
    setCookies('user_role', '');
    localStorage.clear();
    navigate('/login');
  };

  return (
    <NavbarContainer>
      <StyledLogo src={logo} alt="logo" onClick={() => navigate('/')} />

      <StyledLinkContainer>
        <StyledLink to={'/'}>Home</StyledLink>
        <StyledScrollLink activeClass="active" smooth spy to="bikes">
          Bikes
        </StyledScrollLink>

        <StyledScrollLink activeClass="active" smooth spy to="about">
          About
        </StyledScrollLink>

        <StyledScrollLink activeClass="active" smooth spy to="contact">
          Contact
        </StyledScrollLink>

        {cookies?.access_token && (
          <StyledLink to={'/profile'}>My Profile</StyledLink>
        )}
      </StyledLinkContainer>

      {!cookies.access_token ? (
        <StyledLinkContainer>
          <StyledLink to={'/login'}>Login</StyledLink>
          <StyledLink to={'/register'}>Register</StyledLink>
        </StyledLinkContainer>
      ) : (
        <StyledLogout onClick={handleLogout}>Logout</StyledLogout>
      )}
    </NavbarContainer>
  );
};

export default Header;
