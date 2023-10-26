import Bike from './Bike/Bike';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import {
  BikesSectionContainer,
  BikesHeading,
  BikesContainer,
} from './BikesSection.styled';

const BikesSection = () => {
  return (
    <>
      <BikesSectionContainer id="bikes">
        <BikesHeading>Explore Our Top Deals</BikesHeading>
        <BikesContainer>
          <Carousel
            width={'100rem'}
            // autoPlay
            // infiniteLoop
            centerMode
            centerSlidePercentage={35}
            showStatus={false}
          >
            <Bike />
            <Bike />
            <Bike />
            <Bike />
            <Bike />
          </Carousel>
        </BikesContainer>
      </BikesSectionContainer>
    </>
  );
};

export default BikesSection;
