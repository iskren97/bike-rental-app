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

const Home = () => {
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
            <BookingButton>Book a bike</BookingButton>
            <BookingButton color={colors.primary}>
              See all available bikes
            </BookingButton>
          </ButtonsContainer>
        </DescContainer>
      </HomeContainer>

      <DatePicker />
    </>
  );
};

export default Home;
