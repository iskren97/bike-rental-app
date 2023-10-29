import styled from 'styled-components';
import { BaseButton } from '../../styles/styles';
import { colors } from '../../styles/constants';

const BookingsContainer = styled.div`
  text-align: center;
  margin-top: 5rem;
`;

const BookingsHeading = styled.h1`
  margin-top: 10rem;
`;

const CancelBookingButton = styled.button`
  ${BaseButton}
  width: 20%;
  background-color: ${colors.white};
  border-color: ${colors.error};

  &:hover {
    background-color: ${colors.error};
    color: ${colors.white};
  }
`;

export { BookingsContainer, BookingsHeading, CancelBookingButton };
