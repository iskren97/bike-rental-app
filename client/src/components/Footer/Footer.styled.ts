import styled from 'styled-components';
import { colors, fonts } from '../../styles/constants';

const StyledFooter = styled.footer`
  background-color: ${colors.tertiary};
  padding: 5rem 0;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const FooterLogo = styled.img`
  height: 20rem;
  width: 20rem;
  border-radius: 50%;
`;

const FooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const FooterInnerContainer = styled.div`
  display: flex;
  gap: 3rem;
  padding: 5rem;
`;

const FooterParagraph = styled.p`
  font-size: ${fonts.size.medium};
  color: ${colors.white};
`;

export {
  StyledFooter,
  FooterLogo,
  FooterContainer,
  FooterInnerContainer,
  FooterParagraph,
};
