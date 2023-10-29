import styled from 'styled-components';
import { BaseButton } from '../../../styles/styles';
import { colors, fonts } from '../../../styles/constants';

const BikeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  padding: 5rem;
  border-radius: 1rem;
`;

const BikeImg = styled.img`
  width: 40rem;
  height: 40rem;
  object-fit: contain;
`;

const BikeModel = styled.h2`
  font-size: ${fonts.size.extraMedium};
`;

const BikeInfoParagraph = styled.p`
  font-size: ${fonts.size.medium};
`;

const BookBikeButton = styled.button`
  ${BaseButton};
  width: 50%;
  background-color: ${colors.white};
  color: ${colors.primary};
  transition: all 0.5s;
  letter-spacing: 0.5rem;
  text-transform: uppercase;

  &:hover {
    color: ${colors.white};
    background-image: linear-gradient(
      to right,
      ${colors.secondary},
      ${colors.tertiary}
    );

    &:disabled {
      height: 400rem;
    }
  }
`;

export { BikeContainer, BikeImg, BikeModel, BikeInfoParagraph, BookBikeButton };
