import React, { useState } from 'react';
import Form from '../components/Form/Form';
import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [_, setCookies] = useCookies(['access_token']);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await axios.post('/users/login', {
        username,
        password,
      });

      setCookies('access_token', response.data.token);
      window.localStorage.setItem('user', JSON.stringify(response.data.user));
      alert('Success');
      navigate('/');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Form
        label={'Login'}
        username={username}
        setUsername={setUsername}
        password={password}
        setPassword={setPassword}
        handleSubmit={handleSubmit}
      />
    </>
  );
};

export default Login;
