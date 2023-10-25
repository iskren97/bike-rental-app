import { Icon } from '../DatePicker/DatePicker.styled';
import { colors } from '../../styles/constants';
import { BiCalendarCheck } from 'react-icons/bi';
import { GiDutchBike } from 'react-icons/gi';
import {
  BookingInfoContainer,
  InfoHeading,
  InfoParagraph,
  InnerContainer,
} from './BookingInfo.styled';

const BookingInfo = () => {
  return (
    <BookingInfoContainer>
      <InnerContainer>
        <Icon color={colors.primary}>
          <BiCalendarCheck />
        </Icon>
        <InfoHeading>Pick-up Date</InfoHeading>
        <InfoParagraph>Choose the best Pick-Up Date for you</InfoParagraph>
      </InnerContainer>

      <InnerContainer>
        <Icon color={colors.tertiary}>
          <BiCalendarCheck />
        </Icon>
        <InfoHeading>Return Date</InfoHeading>
        <InfoParagraph>Choose the best Return Date for you</InfoParagraph>
      </InnerContainer>

      <InnerContainer>
        <Icon color={colors.primary}>
          <GiDutchBike />
        </Icon>
        <InfoHeading>Book Your Bike</InfoHeading>
        <InfoParagraph>It's time to book your bike and enjoy!</InfoParagraph>
      </InnerContainer>
    </BookingInfoContainer>
  );
};

export default BookingInfo;
