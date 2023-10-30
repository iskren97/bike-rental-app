import styled from 'styled-components';
import { colors, fonts } from '../../styles/constants';

const BikesSectionContainer = styled.section`
  padding: 5rem 0 0 0;
`;

const BikesHeading = styled.h1`
  text-align: center;
  text-transform: uppercase;
  font-size: ${fonts.size.large};
  color: ${colors.tertiary};
  letter-spacing: 0.5rem;
  transition: all 0.2s;

  &:hover {
    text-shadow: 0.5rem 1rem 2rem ${colors.blackLighter};
  }
`;

const BikesContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 3rem;
  justify-content: center;
  padding: 15rem 0 5rem 0;
  margin-top: -10rem;
`;

const StyledIndicator = styled.li``;

const BikesInnerContainer = styled.div`
  height: 66rem;
`;

export {
  BikesSectionContainer,
  BikesHeading,
  BikesContainer,
  StyledIndicator,
  BikesInnerContainer,
};
