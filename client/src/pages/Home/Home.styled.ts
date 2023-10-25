import styled from 'styled-components';
import { colors } from '../../styles/constants';
import { BaseButton } from '../../styles/styles';
import mainImage from '../../assets/home-page-image-main.jpg';

const HomeContainer = styled.div`
  height: 95vh;
  background-image: linear-gradient(
      to right,
      ${colors.secondary},
      ${colors.tertiary}
    ),
    url(${mainImage});
  background-size: cover;
  background-position: right;
  clip-path: polygon(0 0, 100% 0, 100% 75vh, 0 100%);
`;

const DescContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
`;

const HeadingPrimary = styled.h1`
  font-size: 5rem;
  color: ${colors.white};
  margin-top: 8rem;
`;

const DescParagraph = styled.p`
  font-size: 2rem;
  color: ${colors.white};
`;

const ImagePrimary = styled.img`
  width: 50rem;
  height: 50rem;
  object-fit: cover;
  border-radius: 50%;
  transition: all 0.2s;
  box-shadow: 0px 0px 1rem ${colors.primary};
`;

const ButtonsContainer = styled.div`
  display: flex;
  gap: 1rem;
`;

const BookingButton = styled.button`
  ${BaseButton}
  background-color: ${(props) => props.color || `${colors.white}`};
  color: ${(props) => (props.color ? `${colors.white}` : `${colors.primary}`)};

  &:hover {
    background-color: ${colors.primary};
    color: ${colors.white};
    box-shadow: 0px 0px 10px ${colors.blackLighter};
  }
`;

export {
  HomeContainer,
  DescContainer,
  HeadingPrimary,
  DescParagraph,
  ImagePrimary,
  ButtonsContainer,
  BookingButton,
};
