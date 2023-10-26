import { FC } from 'react';
import { BookingButton } from '../../../pages/Home/Home.styled';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { FaLocationDot } from 'react-icons/fa6';
import { IoIosColorPalette } from 'react-icons/io';
import { FcRating } from 'react-icons/fc';
import {
  BikeContainer,
  BikeImg,
  BikeInfoParagraph,
  BikeModel,
} from './Bike.styled';

interface BikeProps {
  model?: string;
  color?: string;
  location?: string;
  rating?: number;
  availability?: boolean;
}

const Bike: FC<BikeProps> = () => {
  return (
    <BikeContainer>
      <BikeImg
        src="https://www.reidcycles.com.au/cdn/shop/products/reid-cycles-australia-mtb-sport-wsd-mountain-bike-light-blue-s-995.png?v=1620962151"
        alt="bike"
      />
      <BikeModel>Tundra Bike</BikeModel>
      <BikeInfoParagraph>
        <IoIosColorPalette /> blue ocean
      </BikeInfoParagraph>
      <BikeInfoParagraph>
        <FaLocationDot /> Sofia, Bulgaria
      </BikeInfoParagraph>
      <BikeInfoParagraph>
        <FcRating /> 4
      </BikeInfoParagraph>
      <BikeInfoParagraph>Availability</BikeInfoParagraph>
      <BookingButton style={{ width: '100%' }}>Rent Bike</BookingButton>
    </BikeContainer>
  );
};

export default Bike;
