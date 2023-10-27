import { FC } from 'react';
import { BookingButton } from '../../../pages/Home/Home.styled';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { FaLocationDot } from 'react-icons/fa6';
import {
  IoIosColorPalette,
  IoIosCheckmarkCircleOutline,
  IoIosCloseCircleOutline,
} from 'react-icons/io';
import { FcRating } from 'react-icons/fc';
import {
  BikeContainer,
  BikeImg,
  BikeInfoParagraph,
  BikeModel,
} from './Bike.styled';

interface BikeProps {
  model: string;
  color: string;
  location: string;
  rating: number;
  availability: boolean;
  imgUrl: string;
}

const Bike: FC<BikeProps> = ({
  model,
  color,
  location,
  rating,
  availability,
  imgUrl,
}) => {
  return (
    <BikeContainer>
      <BikeImg src={imgUrl} alt="bike" />

      <BikeModel>{model}</BikeModel>
      <BikeInfoParagraph>
        <IoIosColorPalette />
        {color}
      </BikeInfoParagraph>

      <BikeInfoParagraph>
        <FaLocationDot /> {location}
      </BikeInfoParagraph>

      <BikeInfoParagraph>
        <FcRating /> {rating}
      </BikeInfoParagraph>

      <BikeInfoParagraph>
        Availability:{' '}
        {availability === true ? (
          <IoIosCheckmarkCircleOutline />
        ) : (
          <IoIosCloseCircleOutline />
        )}
      </BikeInfoParagraph>

      <BookingButton disabled={!availability}>Rent Bike</BookingButton>
    </BikeContainer>
  );
};

export default Bike;
