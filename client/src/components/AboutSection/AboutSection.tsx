import {
  AboutBikeImage,
  AboutDescParagraph,
  AboutDescriptionContainer,
  AboutHeading,
  AboutSectionContainer,
} from './AboutSection.styled';
import AboutBike from '../../assets/about-section-bike.png';

// AboutSection component represents 3rd section of HomePage.

const AboutSection = () => {
  return (
    <AboutSectionContainer id="about">
      <AboutBikeImage src={AboutBike} alt="bike" />
      <AboutDescriptionContainer>
        <AboutHeading>
          Explore our great deals and choose the one that suits you the most
        </AboutHeading>
        <AboutDescParagraph>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate
          eligendi consectetur totam illo doloremque quo nostrum facere, facilis
          ipsa fugit, vitae suscipit. Itaque temporibus dolores alias debitis
          esse pariatur doloremque! Lorem ipsum dolor, sit amet consectetur
          adipisicing elit. Qui autem ratione in repellendus dolorem
          consequuntur fugiat laboriosam et eos quam veniam doloremque
          reiciendis dolorum quisquam magni, cupiditate eum sint excepturi.
        </AboutDescParagraph>

        <AboutDescParagraph>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate
          eligendi consectetur totam illo doloremque quo nostrum facere, facilis
          ipsa fugit, vitae suscipit. Itaque temporibus dolores alias debitis
          esse pariatur doloremque! Lorem ipsum dolor, sit amet consectetur
          adipisicing elit. Qui autem ratione in repellendus dolorem
          consequuntur fugiat laboriosam et eos quam veniam doloremque
          reiciendis dolorum quisquam magni, cupiditate eum sint excepturi.
        </AboutDescParagraph>
      </AboutDescriptionContainer>
    </AboutSectionContainer>
  );
};

export default AboutSection;
