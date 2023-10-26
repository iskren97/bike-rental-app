import { ChangeEventHandler, FC } from 'react';
import {
  StyledBikesForm,
  BikesFormInput,
  BikesFormLabel,
  BikesFormSubmitButton,
} from './BikesForm.styled';
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
      <BikesFormInput name="model" onChange={(e) => changeHandler(e)} />
      <BikesFormLabel>Color</BikesFormLabel>
      <BikesFormInput name="color" onChange={(e) => changeHandler(e)} />
      <BikesFormLabel>Location</BikesFormLabel>
      <BikesFormInput name="location" onChange={(e) => changeHandler(e)} />
      <BikesFormLabel>Bike Image</BikesFormLabel>
      <BikesFormInput
        onChange={(e) => handleFileUpload(e)}
        type="file"
        name="image"
        accept="image/*"
      />
      <BikesFormSubmitButton type="submit">Submit</BikesFormSubmitButton>
    </StyledBikesForm>
  );
};

export default BikesForm;
