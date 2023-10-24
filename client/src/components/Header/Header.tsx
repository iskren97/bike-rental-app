import logo from '../../assets/bike-rental-logo.jpg';
import {
  NavbarContainer,
  StyledLink,
  StyledLinkContainer,
  StyledLogo,
  StyledLogout,
} from './Header.styled';
import { useNavigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import useUser from '../../hooks/useUser';

const Header = () => {
  const [cookies, setCookies] = useCookies(['access_token']);
  const navigate = useNavigate();

  const handleLogout = () => {
    setCookies('access_token', '');
    localStorage.removeItem('user');
    navigate('/login');
  };

  return (
    <NavbarContainer>
      <StyledLogo src={logo} alt="logo" />

      <StyledLinkContainer>
        <StyledLink to={'/'}>Home</StyledLink>
        <StyledLink to={'/bikes'}>Bikes</StyledLink>
        <StyledLink to={'/users'}>Users</StyledLink>
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
