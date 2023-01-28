import { IMG_CDN_URL } from '../config';
const Card = ({ name, cuisines, lastMileTravelString, cloudinaryImageId }) => {
  return (
    <div className="w-56 p-2 m-2 shadow-lg bg-pink-200 ">
      <img alt="test " src={IMG_CDN_URL + cloudinaryImageId} />
      <h2 className="font-bold text-xl">{name}</h2>
      <h3 className="break-words">{cuisines?.join(',')}</h3>
      <h4>{lastMileTravelString} minutes</h4>
    </div>
  );
};

export default Card;
