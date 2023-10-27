import styled from 'styled-components';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { FaCaretUp, FaCaretDown } from 'react-icons/fa';
import { fonts } from '../../styles/constants';

const BookingSection = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  margin-top: -20vh;
  padding: 25rem 0;
`;

const IconCalendarContainer = styled.div`
  position: relative;
`;

const Icon = styled.span`
  font-size: ${fonts.size.large};
  color: ${(props) => props.color};
  cursor: pointer;
  user-select: none;
`;

const UpIcon = styled(FaCaretUp)`
  font-size: ${fonts.size.medium};
`;

const DownIcon = styled(FaCaretDown)`
  font-size: ${fonts.size.medium};
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
