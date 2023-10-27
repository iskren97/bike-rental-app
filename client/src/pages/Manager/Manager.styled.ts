import styled from 'styled-components';
import { fonts } from '../../styles/constants';

const ManagerPortalContainer = styled.div`
  margin-top: 10rem;
  padding: 5rem;
`;

const ManagerPortalHeading = styled.h1`
  text-align: center;
  font-size: ${fonts.size.large};
`;

const ManagerPortalNav = styled.nav`
  display: flex;
  justify-content: center;
  margin-top: 5rem;
  gap: 5rem;
`;

export { ManagerPortalContainer, ManagerPortalHeading, ManagerPortalNav };
