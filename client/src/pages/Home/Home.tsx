import {
  BookingButton,
  ButtonsContainer,
  DescContainer,
  DescParagraph,
  HeadingPrimary,
  HomeContainer,
} from './Home.styled';
import { colors } from '../../styles/constants';
import DatePicker from '../../components/DatePicker/DatePicker';
import { useRef } from 'react';
import AboutSection from '../../components/AboutSection/AboutSection';
import BikesSection from '../../components/BikesSection/BikesSection';
import ScrollToTop from '../../helpers/ScrollToTop/ScrollToTop';

const Home = () => {
  const bookingSectionRef = useRef<null | HTMLElement>(null);
  const handleScrollToRef = (ref: any) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <HomeContainer>
        <DescContainer>
          <HeadingPrimary>Rent a bike with us</HeadingPrimary>
          <DescParagraph>
            Choose the best bike for you or your family and enjoy a beautiful
            and smooth ride
          </DescParagraph>

          <ButtonsContainer>
            <BookingButton onClick={() => handleScrollToRef(bookingSectionRef)}>
              Book a bike
            </BookingButton>
            <BookingButton color={colors.primary}>
              See all available bikes
            </BookingButton>
          </ButtonsContainer>
        </DescContainer>
      </HomeContainer>

      <DatePicker sectionRef={bookingSectionRef} />
      <AboutSection />
      <BikesSection />
      <ScrollToTop />
    </>
  );
};

export default Home;
