import styled from 'styled-components';
import { colors, fonts } from '../../styles/constants';
import { Link } from 'react-router-dom';

const StyledForm = styled.form`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  background-color: ${colors.white};
`;

const StyledHeading = styled.h1`
  margin-bottom: 5rem;
  font-size: ${fonts.size.extraMedium};
  border-bottom: 0.5rem solid ${colors.primary};
`;

const StyledLabel = styled.label`
  display: block;
  margin: 0.5rem;
  font-size: ${fonts.size.small};
  font-weight: ${fonts.weight.bold};
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
  margin-bottom: 2rem;

  &:disabled {
    opacity: 0.5;
  }
  &:enabled {
    opacity: 1;
  }
`;

const StyledParagraph = styled.p`
  display: inline-block;
  font-size: ${fonts.size.small};
`;

const StyledFormLink = styled(Link)`
  text-decoration: none;
  color: ${colors.black};
  font-size: ${fonts.size.small};
  margin-left: 0.5rem;

  &:hover {
    text-decoration: underline;
  }
`;

export {
  StyledForm,
  StyledHeading,
  StyledLabel,
  StyledInput,
  StyledButton,
  StyledParagraph,
  StyledFormLink,
};
