import styled from 'styled-components';
import { fonts } from '../../styles/constants';

const BookingInfoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10rem;
  text-align: center;
  padding: 10rem 0;
`;

const InnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const InfoHeading = styled.h2`
  font-size: ${fonts.size.extraMedium};
`;

const InfoParagraph = styled.p`
  font-size: ${fonts.size.medium};
`;

export { BookingInfoContainer, InnerContainer, InfoHeading, InfoParagraph };
