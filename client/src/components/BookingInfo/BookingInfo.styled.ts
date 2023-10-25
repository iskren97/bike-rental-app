import styled from 'styled-components';

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
  font-size: 3rem;
`;

const InfoParagraph = styled.p`
  font-size: 2rem;
`;

export { BookingInfoContainer, InnerContainer, InfoHeading, InfoParagraph };
