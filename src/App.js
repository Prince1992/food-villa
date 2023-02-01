import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import { Outlet } from 'react-router-dom';
import { useState } from 'react';
import UserContext from './utils/UserContext';

function AppLayout() {
  const [user, setUser] = useState({
    name: 'Amar',
    email: 'amar@gmail.com',
  });

  return (
    <div className="p-2">
      <UserContext.Provider
        value={{
          user: user,
          setUser: setUser,
        }}
      >
        <Header />
        {/*Outlet for different layouts*/}
        <Outlet />
        <Footer />
      </UserContext.Provider>
    </div>
  );
}

export default AppLayout;
