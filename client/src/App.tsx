import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Layout from './components/Layout';
import Register from './pages/Register/Register';
import Login from './pages/Login/Login';
import Manager from './pages/Manager/Manager';

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/manager" element={<Manager />} />
          <Route path="/manager/:subpath" element={<Manager />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
