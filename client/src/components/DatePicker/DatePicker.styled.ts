import styled from 'styled-components';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { FaCaretUp, FaCaretDown } from 'react-icons/fa';

const BookingSection = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  margin-top: -20vh;
  padding: 30rem 0;
`;

const IconCalendarContainer = styled.div`
  position: relative;
`;

const Icon = styled.span`
  font-size: 4rem;
  color: ${(props) => props.color};
  cursor: pointer;
  user-select: none;
`;

const UpIcon = styled(FaCaretUp)`
  font-size: 2rem;
`;

const DownIcon = styled(FaCaretDown)`
  font-size: 2rem;
`;

const DateCalendar = styled(Calendar)`
  position: absolute;
  top: 6rem;
`;

export {
  BookingSection,
  IconCalendarContainer,
  Icon,
  UpIcon,
  DownIcon,
  DateCalendar,
};
