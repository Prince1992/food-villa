import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import { Outlet } from 'react-router-dom';

function AppLayout() {
  return (
    <div className="p-2">
      <Header />
      {/*Outlet for different layouts*/}
      <Outlet />
      <Footer />
    </div>
  );
}

export default AppLayout;
