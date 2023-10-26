import styled from 'styled-components';
import { FaAngleUp } from 'react-icons/fa';
import { colors } from '../../styles/constants';

const ScrollContainer = styled.div`
  position: relative;
`;

const ScrollIcon = styled(FaAngleUp)`
  position: fixed;
  bottom: 4rem;
  right: 2.5rem;
  z-index: 20;

  background-color: ${colors.primary};
  border: 2px solid ${colors.white};
  border-radius: 50%;
  height: 5rem;
  width: 5rem;
  color: ${colors.white};
  cursor: pointer;
  animation: movingScroll 3s ease-in-out infinite;
  transition: all 0.5s ease-in-out;

  &:hover {
    animation: none;
    background: ${colors.white};
    color: ${colors.primary};
    border: 2px solid ${colors.primary};
  }

  @keyframes movingScroll {
    0% {
      transform: translateY(0px);
    }
    25% {
      transform: translateY(20px);
    }
    50% {
      transform: translateY(0px);
    }
    75% {
      transform: translateY(-20px);
    }
    100% {
      transform: translateY(0px);
    }
  }
`;

export { ScrollContainer, ScrollIcon };
