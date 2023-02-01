//import { Outlet } from 'react-router-dom';
import { useContext } from 'react';
import UserContext from '../utils/UserContext';
import ProfileClassComponent from './Profile';
import Profile from './ProfileClass';

const About = () => {
  const { user } = useContext(UserContext);
  return (
    <div>
      <h1>About us Page</h1>
      <h2 className="font-bold">
        {user.name} - {user.email}
      </h2>
      <p>This is the namaste live class-07 - finding the class</p>

      <ProfileClassComponent name={'Amar'} />
      <Profile name={'Amar Class based'} />
    </div>
  );
};

export default About;
