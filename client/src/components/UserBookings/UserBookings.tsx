import { useEffect, useState } from 'react';
import axios from 'axios';
import { BikeDTO } from '../../types/bike';
import { useGetUserID } from '../../hooks/useGetUserId';
import Bike from '../BikesSection/Bike/Bike';
import {
  BookingsContainer,
  BookingsHeading,
  CancelBookingButton,
} from './UserBookings.styled';

const UserBookings = () => {
  const [userRentedBikes, setUserReservedBikes] = useState<BikeDTO[]>([]);
  const userID = useGetUserID();

  useEffect(() => {
    axios
      .get(`/bikes/reservedBikes/${userID}`)
      .then((resp) => setUserReservedBikes(resp.data.reservedBikes))
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const handleCancellation = (bikeID: string) => {
    axios
      .delete(`/bookings/${bikeID}`, { data: { userID } })
      .then(({ data }) =>
        setUserReservedBikes((prevBikes) =>
          prevBikes.filter((bike) => bike._id !== data.bike)
        )
      )
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <BookingsContainer>
      {userRentedBikes?.length > 0 ? (
        <>
          <BookingsHeading>My Reservations</BookingsHeading>

          {userRentedBikes?.map((bike: BikeDTO) => {
            return (
              <BookingsContainer key={bike._id}>
                <Bike
                  model={bike.model}
                  color={bike.color}
                  location={bike.location}
                  rating={bike.rating}
                  availability={bike.availability}
                  imgUrl={bike.imgUrl}
                />

                <CancelBookingButton
                  onClick={() => handleCancellation(bike._id)}
                >
                  Cancel Reservation
                </CancelBookingButton>
              </BookingsContainer>
            );
          })}
        </>
      ) : (
        <BookingsHeading>You have no reservations.</BookingsHeading>
      )}
    </BookingsContainer>
  );
};

export default UserBookings;
