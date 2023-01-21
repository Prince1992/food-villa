//import { Outlet } from 'react-router-dom';
import ProfileClassComponent from './Profile';
import Profile from './ProfileClass';
const About = () => {
  return (
    <div>
      <h1>About us Page</h1>
      <p>This is the namaste live class-07 - finding the class</p>

      <ProfileClassComponent name={'Amar'} />
      <Profile name={'Amar Class based'} />
    </div>
  );
};

export default About;
