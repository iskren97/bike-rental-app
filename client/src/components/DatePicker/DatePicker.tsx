import { BiCalendarCheck } from 'react-icons/bi';
import { colors } from '../../styles/constants';
import { BookingButton } from '../../pages/Home/Home.styled';
import {
  BookingSection,
  DateCalendar,
  DownIcon,
  Icon,
  IconCalendarContainer,
  UpIcon,
} from './DatePicker.styled';
import { FC, LegacyRef, useState } from 'react';

interface DatePickerProps {
  sectionRef: LegacyRef<HTMLElement>;
}

const DatePicker: FC<DatePickerProps> = ({ sectionRef }) => {
  const [pickUpDate, setPickUpDate] = useState<Date>(new Date());
  const [isPickUpOpen, setIsPickUpOpen] = useState<boolean>(false);

  const [returnDate, setReturnDate] = useState<Date>(new Date());
  const [isReturnOpen, setIsReturnOpen] = useState<boolean>(false);

  return (
    <BookingSection ref={sectionRef}>
      <IconCalendarContainer>
        <Icon
          color={colors.primary}
          onClick={() => setIsPickUpOpen(!isPickUpOpen)}
        >
          <BiCalendarCheck />
          Pick Up Date
          {isPickUpOpen ? <UpIcon /> : <DownIcon />}
        </Icon>
        {isPickUpOpen && (
          <DateCalendar value={pickUpDate} onChange={setPickUpDate as any} />
        )}
      </IconCalendarContainer>

      <IconCalendarContainer>
        <Icon
          color={colors.tertiary}
          onClick={() => setIsReturnOpen(!isReturnOpen)}
        >
          <BiCalendarCheck />
          Return Date
          {isReturnOpen ? <UpIcon /> : <DownIcon />}
        </Icon>
        {isReturnOpen && (
          <DateCalendar value={returnDate} onChange={setReturnDate as any} />
        )}
      </IconCalendarContainer>

      <BookingButton>Book a Bike</BookingButton>
    </BookingSection>
  );
};

export default DatePicker;
