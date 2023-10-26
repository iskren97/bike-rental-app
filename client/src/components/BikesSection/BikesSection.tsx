import Bike from './Bike/Bike';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import {
  BikesSectionContainer,
  BikesHeading,
  BikesContainer,
} from './BikesSection.styled';
import useFetchData from '../../hooks/useFetchData';

const BikesSection = () => {
  const { data: bikes } = useFetchData('/bikes');

  return (
    <>
      <BikesSectionContainer id="bikes">
        <BikesHeading>Explore Our Top Deals</BikesHeading>
        <BikesContainer>
          <Carousel
            width={'100rem'}
            autoPlay
            infiniteLoop
            showThumbs={false}
            showStatus={false}
            showArrows={false}
          >
            {bikes?.map((bike) => {
              return (
                <Bike
                  model={bike.model}
                  color={bike.color}
                  location={bike.location}
                  rating={bike.rating}
                  availability={bike.availability}
                  imgUrl={bike.imgUrl}
                />
              );
            })}
          </Carousel>
        </BikesContainer>
      </BikesSectionContainer>
    </>
  );
};

export default BikesSection;
