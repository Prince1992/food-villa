import { useContext } from 'react';
import UserContext from '../utils/UserContext';

const Footer = () => {
  const { user } = useContext(UserContext);
  return (
    // <div className="">
    //   <ul className="flex bg-amber-300 justify-end pr-2 h-50">
    //     <li className="mr-4">{user.name}</li>
    //     <li className="mr-4">{user.email}</li>
    //   </ul>
    // </div>
    <div className="bg-yellow-400 h-36 flex justify-center align-bottom content-center">
      <div className="align-middle text-center">
        {user.name} - {user.email}
      </div>
    </div>
  );
};

export default Footer;
