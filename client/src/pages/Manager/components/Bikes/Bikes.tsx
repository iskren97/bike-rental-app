import { useState } from 'react';
import axios from 'axios';
import {
  BikesContainer,
  BikesDeleteBikeButton,
  BikesHeading,
} from './Bikes.styled';
import { covertToBase64 } from '../../../../helpers/Base64Convertor/Base64Covertor';
import BikesForm from '../BikesForm/BikesForm';
import useFetchData from '../../../../hooks/useFetchData';
import Bike from '../../../../components/BikesSection/Bike/Bike';
import { LoadingDisplay } from '../Users/Users.styled';

// Bikes component part of Manager
// it handles the logic around Bikes

const Bikes = () => {
  const [file, setFile] = useState<string>('');
  const [allValues, setAllValues] = useState({
    model: '',
    color: '',
    location: '',
    imgUrl: '',
  });
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { data: bikes, setData: setBikes, isFetching } = useFetchData('/bikes');

  const changeHandler = (e: any) => {
    setAllValues({ ...allValues, [e.target.name]: e.target.value });
  };

  const handleBikeListing = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setIsLoading(true);

    try {
      const { data } = await axios.post('/bikes/create', {
        model: allValues.model,
        color: allValues.color,
        location: allValues.location,
        imgUrl: file,
      });
      setBikes((prevBikes) => [...prevBikes, data]);
      setAllValues({
        model: '',
        color: '',
        location: '',
        imgUrl: '',
      });

      (e.target as HTMLFormElement).reset();

      alert('Success!');
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files || e.target.files.length === 0) {
      alert('Select a file');
      return;
    }
    const img = e.target.files[0];
    const base64: string = (await covertToBase64(img)) as string;
    setFile(base64);
  };

  const handleBikeDelete = (bikeID: number) => {
    setIsLoading(true);

    axios
      .delete(`/bikes/${bikeID}`)
      .then(({ data }) => {
        setBikes((prevBikes) =>
          prevBikes.filter((bike) => bike._id !== data._id)
        );
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => setIsLoading(false));
  };

  if (isFetching || isLoading) {
    return <LoadingDisplay>Loading ...</LoadingDisplay>;
  }

  return (
    <BikesContainer>
      <BikesHeading>List a bike for rent</BikesHeading>
      <BikesForm
        handleBikeListing={handleBikeListing}
        changeHandler={changeHandler}
        handleFileUpload={handleFileUpload}
      />

      <BikesHeading>Listed Bikes:</BikesHeading>
      {bikes.length > 0 ? (
        <>
          {bikes?.map((bike) => {
            return (
              <>
                <Bike
                  key={bike._id}
                  model={bike.model}
                  color={bike.color}
                  location={bike.location}
                  rating={bike.rating}
                  availability={bike.availability}
                  imgUrl={bike.imgUrl}
                  hideRentButton={true}
                />

                <BikesDeleteBikeButton
                  onClick={() => handleBikeDelete(bike._id)}
                >
                  Remove Bike
                </BikesDeleteBikeButton>
              </>
            );
          })}
        </>
      ) : (
        <BikesHeading>There are not listed Bikes yet.</BikesHeading>
      )}
    </BikesContainer>
  );
};

export default Bikes;
