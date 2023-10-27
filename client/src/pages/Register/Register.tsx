import React, { useState } from 'react';
import axios from 'axios';
import Form from '../../components/Form/Form';
import { useNavigate } from 'react-router-dom';

// Register page handles the logic for registering a user
// by using the Form component

const Register = () => {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      await axios.post('/users/register', {
        username,
        password,
      });

      alert('Registration completed!');
      navigate('/login');
    } catch (error) {
      alert('Error!');
    }
  };

  return (
    <>
      <Form
        label={'Register'}
        username={username}
        setUsername={setUsername}
        password={password}
        setPassword={setPassword}
        handleSubmit={handleSubmit}
      />
    </>
  );
};

export default Register;
