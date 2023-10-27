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

const Header = () => {
  const [cookies, setCookies] = useCookies(['access_token', 'user_role']);
  const navigate = useNavigate();

  const handleLogout = () => {
    setCookies('access_token', '');
    setCookies('user_role', '');
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

        {cookies?.user_role === 'manager' && (
          <StyledLink to={'/manager'}>Manager Portal</StyledLink>
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
