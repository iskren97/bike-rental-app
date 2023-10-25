import { BiCalendarCheck } from 'react-icons/bi';
import { colors } from '../../styles/constants';
import { BookingButton } from '../../pages/Home/Home.styled';
import { BookingSection, Icon } from './DatePicker.styled';

const DatePicker = () => {
  return (
    <BookingSection>
      <Icon color={colors.primary}>
        <BiCalendarCheck />
        Pick Up Date
      </Icon>
      <Icon color={colors.tertiary}>
        <BiCalendarCheck />
        Return Date
      </Icon>
      <BookingButton>Book a Bike</BookingButton>
    </BookingSection>
  );
};

export default DatePicker;
