import { IMG_CDN_URL } from '../config';
const Card = ({
  name,
  image,
  cuisines,
  lastMileTravelString,
  cloudinaryImageId,
}) => {
  return (
    <div className="card">
      <img alt="test " src={IMG_CDN_URL + cloudinaryImageId} />
      <h2>{name}</h2>
      <h3>{cuisines?.join(',')}</h3>
      <h4>{lastMileTravelString} minutes</h4>
    </div>
  );
};

export default Card;
