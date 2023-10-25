import styled from 'styled-components';
import { colors } from '../../styles/constants';
import { BaseButton } from '../../styles/styles';

const HomeContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 5rem;
`;

const DescContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
`;

const HeadingPrimary = styled.h1`
  font-size: 4rem;
`;

const DescParagraph = styled.p`
  font-size: 2rem;
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
