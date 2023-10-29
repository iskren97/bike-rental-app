import styled from 'styled-components';
import { colors, fonts } from '../../styles/constants';

const AboutSectionContainer = styled.section`
  display: flex;
  align-items: center;
  padding: 5rem 5rem;
  color: ${colors.white};
  background-image: linear-gradient(
    to right,
    ${colors.secondary},
    ${colors.tertiary}
  );
`;

const AboutBikeImage = styled.img`
  width: 70rem;
  height: 70rem;
  object-fit: contain;
`;

const AboutDescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const AboutHeading = styled.h1`
  font-size: ${fonts.size.large};
  text-align: left;
`;

const AboutDescParagraph = styled.p`
  font-size: ${fonts.size.medium};
  line-break: anywhere;
  line-height: 2.5rem;
`;

export {
  AboutSectionContainer,
  AboutBikeImage,
  AboutDescriptionContainer,
  AboutHeading,
  AboutDescParagraph,
};
