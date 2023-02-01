import { useContext } from 'react';
import { IMG_CDN_URL } from '../config';
import UserContext from '../utils/UserContext';
const Card = ({ name, cuisines, lastMileTravelString, cloudinaryImageId }) => {
  const { user } = useContext(UserContext);
  return (
    <div className="w-56 p-2 m-2 shadow-lg bg-pink-200 ">
      <img alt="test " src={IMG_CDN_URL + cloudinaryImageId} />
      <h2 className="font-bold text-xl">{name}</h2>
      <h3 className="break-words">{cuisines?.join(',')}</h3>
      <h4>{lastMileTravelString} minutes</h4>
      <h4>{user.name}</h4>
    </div>
  );
};

export default Card;
