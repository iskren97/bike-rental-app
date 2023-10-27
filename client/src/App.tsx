import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Layout from './components/Layout';
import Register from './pages/Register/Register';
import Login from './pages/Login/Login';
import Manager from './pages/Manager/Manager';
import { useCookies } from 'react-cookie';
import Protected from './routes/Protected';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';

const App = () => {
  const [cookies, _] = useCookies(['user_role']);

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/manager"
            element={
              <Protected isManager={cookies.user_role === 'manager'}>
                <Manager />
              </Protected>
            }
          />
          <Route
            path="/manager/:subpath"
            element={
              <Protected isManager={cookies.user_role === 'manager'}>
                <Manager />
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
