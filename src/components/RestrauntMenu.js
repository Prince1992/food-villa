/* eslint-disable react-hooks/exhaustive-deps */

import { useParams } from 'react-router-dom';
import { IMG_CDN_URL } from '../config';
import Shimmer from './Shimmer';
import useRestaurant from '../utils/useRestaurant';

const RestrauntMenu = () => {
  const params = useParams();
  const { id } = params;

  const restaurant = useRestaurant(id);

  return !restaurant ? (
    <Shimmer />
  ) : (
    <div className="menu">
      <div>
        <h1>Restrauent id: {restaurant.id}</h1>
        <h2>{restaurant.name}</h2>
        <h2>{restaurant.area}</h2>
        <h2>{restaurant.city}</h2>
        <h2>{restaurant.costForTwoMsg}</h2>
        <h2>{restaurant.avgRating}</h2>
        <img src={IMG_CDN_URL + restaurant.cloudinaryImageId} alt="Test" />
      </div>
      <div>
        <h2>Menu</h2>
        <ul>
          {Object.values(restaurant?.menu?.items).map((item) => (
            <li key={item?.id}>{item?.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default RestrauntMenu;
