import styled from 'styled-components';
import { colors } from '../../../styles/constants';

const BikeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  height: 45rem;
  padding: 2rem;
  margin: 1rem;
  border-radius: 1rem;
  box-shadow: 0 0 4rem ${colors.blackLighter};
`;

const BikeImg = styled.img`
  width: 30rem;
  height: 30rem;
  object-fit: contain;
`;

const BikeModel = styled.h2`
  font-size: 2.5rem;
`;

const BikeInfoParagraph = styled.p`
  font-size: 1.7rem;
`;

export { BikeContainer, BikeImg, BikeModel, BikeInfoParagraph };
