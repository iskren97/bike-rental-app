import styled from 'styled-components';

const BookingSection = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  margin-top: -20vh;
  padding: 30rem 0;
`;

const Icon = styled.span`
  font-size: 4rem;
  color: ${(props) => props.color};
`;

export { BookingSection, Icon };
