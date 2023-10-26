import styled from 'styled-components';

const BikeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  height: 45rem;
  padding: 2rem;
  margin: 1rem;
  border-radius: 1rem;
`;

const BikeImg = styled.img`
  width: 20rem;
  height: 20rem;
  object-fit: contain;
`;

const BikeModel = styled.h2`
  font-size: 2.5rem;
`;

const BikeInfoParagraph = styled.p`
  font-size: 1.7rem;
`;

export { BikeContainer, BikeImg, BikeModel, BikeInfoParagraph };
