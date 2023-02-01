import { useContext } from 'react';
import UserContext from '../utils/UserContext';

const Footer = () => {
  const { user } = useContext(UserContext);
  return (
    <div className="h-10">
      <ul className="flex bg-amber-300 justify-end pr-2">
        <li className="mr-4">{user.name}</li>
        <li className="mr-4">{user.email}</li>
      </ul>
    </div>
  );
};

export default Footer;
