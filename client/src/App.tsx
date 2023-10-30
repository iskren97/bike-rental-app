import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Layout from './components/Layout';
import Register from './pages/Register/Register';
import Login from './pages/Login/Login';
import Profile from './pages/Profile/Profile';
import { useCookies } from 'react-cookie';
import Protected from './routes/Protected';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';

const App = () => {
  const [cookies, _] = useCookies(['access_token']);

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/profile/:subpath?"
            element={
              <Protected isLoggedIn={!!cookies.access_token}>
                <Profile />
              </Protected>
            }
          />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
};

export default App;
