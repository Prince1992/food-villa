import { useState } from 'react';
import Logo from '../assets/img/logo.jpeg';
import { Link } from 'react-router-dom';
import useOnline from '../utils/useOnline';

const Title = () => {
  return <img className="sm:h-28 p-2" alt="test" src={Logo} />;
};

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const isOnline = useOnline();
  return (
    <div className="shadow-lg sm:flex justify-between sm:bg-amber-200">
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
        <button className="pr-4" onClick={() => setIsLoggedIn(false)}>
          Logout
        </button>
      ) : (
        <button onClick={() => setIsLoggedIn(true)}>Login</button>
      )}
      {/* <button>Login</button>
      <button>Logout</button> */}
    </div>
  );
};

export default Header;
