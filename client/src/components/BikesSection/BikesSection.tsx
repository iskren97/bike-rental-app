import { FC, LegacyRef } from 'react';
import Bike from './Bike/Bike';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import {
  BikesSectionContainer,
  BikesHeading,
  BikesContainer,
} from './BikesSection.styled';
import useFetchData from '../../hooks/useFetchData';

interface BikesSectionProps {
  sectionRef: LegacyRef<HTMLElement>;
}

const BikesSection: FC<BikesSectionProps> = ({ sectionRef }) => {
  const { data: bikes } = useFetchData('/bikes');

  return (
    <>
      <BikesSectionContainer id="bikes" ref={sectionRef}>
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
                  key={bike._id}
                  model={bike.model}
                  color={bike.color}
                  location={bike.location}
                  rating={bike.rating}
                  availability={bike.availability}
                  imgUrl={bike.imgUrl}
                  btnLabel="Rent Bike"
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
