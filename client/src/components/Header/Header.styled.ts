import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { colors } from '../../styles/constants';

const NavbarContainer = styled.nav`
  min-height: 5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem;
`;

const StyledLink = styled(Link)`
  font-size: 20px;
  text-decoration: none;
  transition: all 0.2s;
  color: ${colors.black};

  &:hover {
    transform: scale(1.2);
  }
`;

const StyledLogo = styled.img`
  height: 9rem;
  width: 9rem;
  border-radius: 50%;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    transform: scale(1.2);
  }
`;

const StyledLinkContainer = styled.div`
  display: flex;
  gap: 2rem;
  padding: 10px;
`;

export { NavbarContainer, StyledLink, StyledLogo, StyledLinkContainer };
