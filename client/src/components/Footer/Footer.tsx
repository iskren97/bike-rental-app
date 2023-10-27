import {
  StyledFooter,
  FooterLogo,
  FooterContainer,
  FooterInnerContainer,
  FooterParagraph,
} from './Footer.styled';
import logo from '../../assets/bike-rental-logo.jpg';
import { StyledLink } from '../Header/Header.styled';
import { colors } from '../../styles/constants';

const Footer = () => {
  return (
    <StyledFooter id="contact">
      <FooterLogo src={logo} alt="logo" />

      <FooterContainer>
        <FooterInnerContainer>
          <StyledLink color={colors.white} to={'#'}>
            Contact us
          </StyledLink>

          <StyledLink color={colors.white} to={'#'}>
            Careers
          </StyledLink>

          <StyledLink color={colors.white} to={'#'}>
            Policy
          </StyledLink>

          <StyledLink color={colors.white} to={'#'}>
            Terms
          </StyledLink>
        </FooterInnerContainer>

        <FooterParagraph>
          Built by Iskren Gyorev for practical task that was prepared as a
          candidate for a Front-end developer position.
        </FooterParagraph>
      </FooterContainer>
    </StyledFooter>
  );
};

export default Footer;
