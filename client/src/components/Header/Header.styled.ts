import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { colors } from '../../styles/constants';
import { BaseButton } from '../../styles/styles';
import { Link as ScrollLink } from 'react-scroll';

const NavbarContainer = styled.nav`
  min-height: 5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  z-index: 1;
  background-color: ${colors.white};
`;

const StyledLink = styled(Link)`
  font-size: 2rem;
  text-decoration: none;
  transition: all 0.2s;
  color: ${colors.black};
  border-bottom: 1px solid ${colors.primary};

  &:hover {
    transform: scale(1.2);
  }
`;

const StyledScrollLink = styled(ScrollLink)`
  font-size: 2rem;
  text-decoration: none;
  transition: all 0.2s;
  color: ${colors.black};
  border-bottom: 1px solid ${colors.primary};
  cursor: pointer;

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
  padding: 1rem;
`;

const StyledLogout = styled.button`
  ${BaseButton}
  color: ${colors.primary};
  background: none;

  &:hover {
    background-color: ${colors.primary};
    color: ${colors.white};
    box-shadow: 0px 0px 10px ${colors.blackLighter};
  }
`;

export {
  NavbarContainer,
  StyledLink,
  StyledScrollLink,
  StyledLogo,
  StyledLinkContainer,
  StyledLogout,
};
