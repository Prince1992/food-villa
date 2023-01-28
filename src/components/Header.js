import { useState } from 'react';
import { IMG_URL } from '../config';
import Logo from '../assets/img/logo.jpeg';
import { Link } from 'react-router-dom';
import useOnline from '../utils/useOnline';

const Title = () => {
  return <img className="h-28 p-2" alt="test" src={Logo} />;
};

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const isOnline = useOnline();
  return (
    <div className="flex justify-between bg-pink-50 shadow-lg">
      <Title />
      <div className="nav-bar">
        <ul className="flex py-10">
          <li className="px-2">
            <Link to="/">Home</Link>
          </li>
          <li className="px-2">
            <Link to="/about">About</Link>
          </li>

          <li className="px-2">
            <Link to="/contact">Contact</Link>
          </li>
          <li className="px-2">
            <Link to="/instamart">Instamart</Link>
          </li>
          <li className="px-2">
            <Link>Cart</Link>
          </li>
        </ul>
      </div>
      {isOnline ? '✅ Online' : '🔴 Offline'}
      {isLoggedIn ? (
        <button onClick={() => setIsLoggedIn(false)}>Logout</button>
      ) : (
        <button onClick={() => setIsLoggedIn(true)}>Login</button>
      )}
      {/* <button>Login</button>
      <button>Logout</button> */}
    </div>
  );
};

export default Header;
