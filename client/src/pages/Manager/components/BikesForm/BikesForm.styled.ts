import styled from 'styled-components';
import { colors } from '../../../../styles/constants';
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
  color: #3d3d3d;
  display: block;
  font-family: sans-serif;
  font-size: 14px;
  font-weight: 500;
  margin-bottom: 5px;
`;

const BikesFormInput = styled.input`
  border: 1px solid ${colors.primary};
  border-radius: 4px;
  box-sizing: border-box;
  padding: 1rem;
  width: 100%;
`;

const BikesFormSubmitButton = styled.button`
  ${BaseButton}
  background-color: ${colors.primary};
  color: white;
  font-size: 1.5rem;
  margin: 2rem 0;
`;
export {
  StyledBikesForm,
  BikesFormLabel,
  BikesFormInput,
  BikesFormSubmitButton,
};
