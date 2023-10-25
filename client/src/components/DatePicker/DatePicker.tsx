import { BiCalendarCheck } from 'react-icons/bi';
import { colors } from '../../styles/constants';
import { BookingButton } from '../../pages/Home/Home.styled';
import { BookingSection, Icon } from './DatePicker.styled';
import { FC, LegacyRef } from 'react';

interface DatePickerProps {
  sectionRef: LegacyRef<HTMLElement>;
}

const DatePicker: FC<DatePickerProps> = ({ sectionRef }) => {
  return (
    <BookingSection ref={sectionRef}>
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
