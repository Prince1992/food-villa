import { useState } from 'react';
import { IMG_URL } from '../config';
import Logo from '../assets/img/logo.jpeg';

const loggedInUser = () => {
  // API call to check
  return true;
};
const Title = () => {
  return <img className="logo" alt="test" src={Logo} />;
};

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  return (
    <div className="header">
      <Title />
      <div className="nav-bar">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
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
