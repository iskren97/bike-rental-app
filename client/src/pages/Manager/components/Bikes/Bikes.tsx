import { useState } from 'react';
import axios from 'axios';
import { BikesContainer, BikesHeading } from './Bikes.styled';
import { covertToBase64 } from '../../../../helpers/Base64Convertor/Base64Covertor';
import BikesForm from '../BikesForm/BikesForm';

const Bikes = () => {
  const [file, setFile] = useState<string>('');
  const [allValues, setAllValues] = useState({
    model: '',
    color: '',
    location: '',
    imgUrl: '',
  });

  const changeHandler = (e: any) => {
    setAllValues({ ...allValues, [e.target.name]: e.target.value });
  };

  const handleBikeListing = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      await axios.post('/bikes/create', {
        model: allValues.model,
        color: allValues.color,
        location: allValues.location,
        imgUrl: file,
      });

      setAllValues({
        model: '',
        color: '',
        location: '',
        imgUrl: '',
      });

      (e.target as HTMLFormElement).reset();

      alert('Success!');
    } catch (error) {}
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

  return (
    <BikesContainer>
      <BikesHeading>List a bike for rent</BikesHeading>
      <BikesForm
        handleBikeListing={handleBikeListing}
        changeHandler={changeHandler}
        handleFileUpload={handleFileUpload}
      />
    </BikesContainer>
  );
};

export default Bikes;
