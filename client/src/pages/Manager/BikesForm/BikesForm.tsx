import { ChangeEventHandler, FC } from 'react';
import {
  StyledBikesForm,
  BikesFormInput,
  BikesFormLabel,
  BikesFormSubmitButton,
} from './BikesForm.styled';

// BikesForm is used for listing/creating a bike resource

interface BikesFormProps {
  handleBikeListing: React.FormEventHandler<HTMLFormElement>;
  changeHandler: ChangeEventHandler<HTMLInputElement>;
  handleFileUpload: ChangeEventHandler<HTMLInputElement>;
}

const BikesForm: FC<BikesFormProps> = ({
  handleBikeListing,
  changeHandler,
  handleFileUpload,
}) => {
  return (
    <StyledBikesForm onSubmit={handleBikeListing}>
      <BikesFormLabel>Model</BikesFormLabel>
      <BikesFormInput
        name="model"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => changeHandler(e)}
      />
      <BikesFormLabel>Color</BikesFormLabel>
      <BikesFormInput
        name="color"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => changeHandler(e)}
      />
      <BikesFormLabel>Location</BikesFormLabel>
      <BikesFormInput
        name="location"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => changeHandler(e)}
      />
      <BikesFormLabel>Bike Image</BikesFormLabel>
      <BikesFormInput
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          handleFileUpload(e)
        }
        type="file"
        name="image"
        accept="image/*"
      />
      <BikesFormSubmitButton type="submit">Submit</BikesFormSubmitButton>
    </StyledBikesForm>
  );
};

export default BikesForm;
