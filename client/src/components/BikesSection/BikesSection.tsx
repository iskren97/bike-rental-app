import { FC, LegacyRef } from 'react';
import Bike from './Bike/Bike';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import {
  BikesSectionContainer,
  BikesHeading,
  BikesContainer,
  StyledIndicator,
  BikesInnerContainer,
} from './BikesSection.styled';
import useFetchData from '../../hooks/useFetchData';
import { BookBikeButton } from './Bike/Bike.styled';
import axios from 'axios';
import { useGetUserID } from '../../hooks/useGetUserId';
import '../../index.css';
import { colors } from '../../styles/constants';
import { BikeDTO } from '../../types/bike';

// BikeSection component represents 3rd section of HomePage.
// It features a Carousel and renders the Bike component for
// presentation of the bikes
// it is responsible for the logic around booking a bike

const indicatorStyles = {
  background: `${colors.primary}`,
  width: 15,
  height: 15,
  borderRadius: '50%',
  display: 'inline-block',
  margin: '0 8px',
  cursor: 'pointer',
};

interface BikesSectionProps {
  sectionRef: LegacyRef<HTMLElement>;
  pickUpDate: Date;
  returnDate: Date;
}

const BikesSection: FC<BikesSectionProps> = ({
  pickUpDate,
  returnDate,
  sectionRef,
}) => {
  const { data: bikes, setData: setBikes } = useFetchData('/bikes');
  const userID = useGetUserID();

  const handleBikeRental = (bikeID: string) => {
    axios
      .post(`/bookings`, { pickUpDate, returnDate, userID, bikeID })
      .then((resp) => {
        setBikes((prevBikes) =>
          prevBikes.map((bike) =>
            bike._id === resp.data.bike
              ? { ...bike, availability: resp.data.isAvailable }
              : bike
          )
        );
      })
      .catch((error) => {
        console.error(error);
      });
  };

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
            renderIndicator={(onClickHandler, isSelected, index) => {
              if (isSelected) {
                return (
                  <StyledIndicator
                    style={{
                      ...indicatorStyles,
                      background: `${colors.tertiary}`,
                    }}
                  />
                );
              }

              return (
                <StyledIndicator
                  style={indicatorStyles}
                  onClick={onClickHandler}
                  value={index}
                  key={index}
                  tabIndex={0}
                />
              );
            }}
          >
            {bikes.map((bike: BikeDTO) => {
              return (
                <BikesInnerContainer key={bike._id}>
                  <Bike
                    model={bike.model}
                    color={bike.color}
                    location={bike.location}
                    rating={bike.rating}
                    availability={bike.availability}
                    imgUrl={bike.imgUrl}
                  />
                  <BookBikeButton
                    onClick={() => handleBikeRental(bike._id)}
                    disabled={!bike.availability}
                  >
                    Rent Bike
                  </BookBikeButton>
                </BikesInnerContainer>
              );
            })}
          </Carousel>
        </BikesContainer>
      </BikesSectionContainer>
    </>
  );
};

export default BikesSection;
