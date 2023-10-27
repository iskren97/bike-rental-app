import styled from 'styled-components';
import { BaseButton } from '../../../../styles/styles';
import { colors } from '../../../../styles/constants';

const BikesContainer = styled.div`
  text-align: center;
  margin-top: 5rem;
`;

const BikesHeading = styled.h1`
  margin-top: 10rem;
`;

const BikesDeleteBikeButton = styled.button`
  ${BaseButton}
  width: 20%;
  background-color: ${colors.white};
  border-color: ${colors.error};

  &:hover {
    background-color: ${colors.error};
    color: ${colors.white};
  }
`;

export { BikesContainer, BikesHeading, BikesDeleteBikeButton };
