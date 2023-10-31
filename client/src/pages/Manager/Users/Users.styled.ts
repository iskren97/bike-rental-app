import styled from 'styled-components';
import { BaseButton } from '../../../styles/styles';
import { colors, fonts } from '../../../styles/constants';

const UsersContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 10rem;
  gap: 5rem;
`;

const UsersInnerContainer = styled.div`
  font-size: ${fonts.size.medium};
  box-shadow: 0 2px 4px 0 ${colors.blackLighter};
  padding: 3rem;
  height: 20rem;
  text-align: center;
`;

const UsersParagraph = styled.p``;

const UsersActionButton = styled.button`
  ${BaseButton}
  margin-right: 4px;
  background: none;

  &:hover {
    background-color: ${colors.primary};
  }
`;

const UsersHeading = styled.h1`
  margin-top: 10rem;
`;

export {
  UsersContainer,
  UsersInnerContainer,
  UsersParagraph,
  UsersActionButton,
  UsersHeading,
};
