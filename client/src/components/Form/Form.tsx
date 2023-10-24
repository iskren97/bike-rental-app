import React, { FC } from 'react';
import {
  StyledButton,
  StyledForm,
  StyledHeading,
  StyledInput,
  StyledLabel,
} from './Form.styled';

interface FormProps {
  label: string;
  username: string;
  password: string;
  setUsername: (value: string) => void;
  setPassword: (value: string) => void;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

const Form: FC<FormProps> = ({
  label,
  username,
  setUsername,
  password,
  setPassword,
  handleSubmit,
}) => {
  return (
    <>
      <StyledForm onSubmit={handleSubmit}>
        <StyledHeading>{label}</StyledHeading>

        <StyledLabel htmlFor="name">Username</StyledLabel>
        <StyledInput
          placeholder="john_doe"
          type="text"
          id="username"
          value={username}
          onChange={(e: React.ChangeEvent<HTMLInputElement>): void =>
            setUsername(e.target.value)
          }
        />

        <StyledLabel htmlFor="password">Password</StyledLabel>
        <StyledInput
          placeholder="password"
          type="password"
          id="password"
          value={password}
          onChange={(e: React.ChangeEvent<HTMLInputElement>): void =>
            setPassword(e.target.value)
          }
        />

        <StyledButton disabled={!username || !password} type="submit">
          {label}
        </StyledButton>
      </StyledForm>
    </>
  );
};

export default Form;
