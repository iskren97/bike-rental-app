import styled from 'styled-components';
import { fonts } from '../../styles/constants';

const ProfileContainer = styled.div`
  margin-top: 10rem;
  padding: 5rem;
`;

const ProfileHeading = styled.h1`
  text-align: center;
  font-size: ${fonts.size.large};
`;

const ProfileNav = styled.nav`
  display: flex;
  justify-content: center;
  margin-top: 5rem;
  gap: 5rem;
`;

export { ProfileContainer, ProfileHeading, ProfileNav };
