import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import { Outlet } from 'react-router-dom';
import { useState } from 'react';
import UserContext from './utils/UserContext';
import { Provider } from 'react-redux';
import store from './utils/store';

function AppLayout() {
  const [user, setUser] = useState({
    name: 'Amar',
    email: 'amar@gmail.com',
  });

  return (
    <div className="p-2">
      <Provider store={store}>
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
      </Provider>
    </div>
  );
}

export default AppLayout;
