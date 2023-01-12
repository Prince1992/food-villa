import { IMG_URL } from '../config';
const Title = () => {
  return <img className="logo" alt="test" src={IMG_URL} />;
};

const Header = () => {
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
    </div>
  );
};

export default Header;
