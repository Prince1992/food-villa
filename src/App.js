import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import { Outlet } from 'react-router-dom';

function AppLayout() {
  return (
    <>
      <Header />
      {/*Outlet for different layouts*/}
      <Outlet />
      <Footer />
    </>
  );
}

export default AppLayout;
