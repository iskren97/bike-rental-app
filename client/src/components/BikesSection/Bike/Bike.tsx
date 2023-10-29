import { FC } from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { FaLocationDot } from 'react-icons/fa6';
import { IoIosColorPalette, IoIosCloseCircleOutline } from 'react-icons/io';
import { AiFillCheckCircle } from 'react-icons/ai';
import { FcRating } from 'react-icons/fc';
import {
  BikeContainer,
  BikeImg,
  BikeInfoParagraph,
  BikeModel,
} from './Bike.styled';
import { colors } from '../../../styles/constants';

// Bike is a re-usable component used for displaying the Bikes
// and their full information

interface BikeProps {
  model: string;
  color: string;
  location: string;
  rating: number;
  availability: boolean;
  imgUrl: string;
  hideRentButton?: boolean;
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
          <AiFillCheckCircle color={colors.primary} />
        ) : (
          <IoIosCloseCircleOutline color={colors.error} />
        )}
      </BikeInfoParagraph>
    </BikeContainer>
  );
};

export default Bike;
