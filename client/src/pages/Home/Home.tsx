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
import Footer from '../../components/Footer/Footer';

// Home or HomePage contains most of the sections
// that we see when the app loads
// it features scrolling to some of the sections
// others are covered in the Header component

const Home = () => {
  const bookingSectionRef = useRef<null | HTMLElement>(null);
  const bikesSectionRef = useRef<null | HTMLElement>(null);

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

            <BookingButton
              onClick={() => handleScrollToRef(bikesSectionRef)}
              color={colors.primary}
            >
              See all available bikes
            </BookingButton>
          </ButtonsContainer>
        </DescContainer>
      </HomeContainer>

      <DatePicker sectionRef={bookingSectionRef} />
      <AboutSection />
      <BikesSection sectionRef={bikesSectionRef} />
      <Footer />
      <ScrollToTop />
    </>
  );
};

export default Home;
