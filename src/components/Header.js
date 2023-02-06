import { useState, useContext } from 'react';
import Logo from '../assets/img/logo-no-background.png';
import { Link } from 'react-router-dom';
import useOnline from '../utils/useOnline';
import UserContext from '../utils/UserContext';
import { useSelector } from 'react-redux';

const Title = () => {
  return <img className="sm:h-28 p-2" alt="test" src={Logo} />;
};

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const isOnline = useOnline();
  const { user } = useContext(UserContext);
  const cartItems = useSelector((store) => store.cart.items);
  return (
    <div className="shadow-lg sm:flex justify-between sm:bg-yellow-400">
      <Title />
      <div className="nav-bar">
        <ul className="flex py-10">
          <li className="px-2 font-bold">
            <Link to="/">Home</Link>
          </li>
          <li className="px-2 font-bold">
            <Link to="/about">About</Link>
          </li>

          <li className="px-2 font-bold">
            <Link to="/contact">Contact</Link>
          </li>
          <li className="px-2 font-bold">
            <Link to="/instamart">Instamart</Link>
          </li>
          <li className="px-2 font-bold">
            <Link to="/cart">Cart - {cartItems.length}</Link>
          </li>
        </ul>
      </div>
      <div className="flex m-4 p-4">
        {isOnline ? (
          <span className="m-4">🟢 Welcome - {user.name}</span>
        ) : (
          <span className="m-4">🔴 </span>
        )}
        {isLoggedIn ? (
          <button
            className="bg-purple-500 p-2 m-2 rounded-xl text-white"
            onClick={() => setIsLoggedIn(false)}
          >
            Logout
          </button>
        ) : (
          <button
            className="bg-purple-500 p-2 m-2 rounded-xl text-white"
            onClick={() => setIsLoggedIn(true)}
          >
            Login
          </button>
        )}
      </div>
      {/* {isOnline ? '✅ Online' : '🔴 Offline'}
      <span className="font-bold text-red-500 m-1 p-1">{user.name}</span> */}
    </div>
  );
};

export default Header;
