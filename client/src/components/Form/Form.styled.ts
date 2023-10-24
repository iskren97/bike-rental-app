import styled from 'styled-components';
import { colors } from '../../styles/constants';

const StyledForm = styled.form`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  background-color: ${colors.white};
  border-radius: 5px;
`;

const StyledHeading = styled.h1`
  margin-bottom: 5rem;
  font-size: 3rem;
  border-bottom: 0.5rem solid ${colors.primary};
`;

const StyledLabel = styled.label`
  display: block;
  margin: 0.5rem;
  font-size: 1.2rem;
  font-weight: bold;
`;

const StyledInput = styled.input`
  width: 100%;
  padding: 1rem;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const StyledButton = styled.button`
  width: 100%;
  background-color: ${colors.primary};
  color: white;
  padding: 1rem;
  margin-top: 1rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:disabled {
    opacity: 0.5;
  }
  &:enabled {
    opacity: 1;
  }
`;

export { StyledForm, StyledHeading, StyledLabel, StyledInput, StyledButton };
