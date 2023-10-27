import Header from './Header/Header';
import { Outlet } from 'react-router-dom';

// Layout component

const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

export default Layout;
