import styled from 'styled-components';
import { colors, fonts } from '../../../../styles/constants';
import { BaseButton } from '../../../../styles/styles';

const StyledBikesForm = styled.form`
  background: ${colors.white};
  border: 1px solid ${colors.primary};
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin: 0 auto;
  max-width: 50rem;
  padding: 3rem 5rem;
  border-radius: 4px;
`;

const BikesFormLabel = styled.label`
  display: block;
  font-size: ${fonts.size.small};
  font-weight: ${fonts.weight.medium};
  margin-bottom: 5px;
`;

const BikesFormInput = styled.input`
  border: 1px solid ${colors.primary};
  border-radius: 4px;
  padding: 1rem;
`;

const BikesFormSubmitButton = styled.button`
  ${BaseButton}
  background-color: ${colors.primary};
  color: white;
  font-size: ${fonts.size.small};
  margin: 2rem 0;
`;
export {
  StyledBikesForm,
  BikesFormLabel,
  BikesFormInput,
  BikesFormSubmitButton,
};
