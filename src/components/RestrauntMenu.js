/* eslint-disable react-hooks/exhaustive-deps */

import { useParams } from 'react-router-dom';
import { IMG_CDN_URL } from '../config';
import Shimmer from './Shimmer';
import useRestaurant from '../utils/useRestaurant';
import { addItem, removeItem } from '../utils/cartSlice';
import { useDispatch } from 'react-redux';

const RestrauntMenu = () => {
  const params = useParams();
  const { id } = params;

  const restaurant = useRestaurant(id);
  const dispatch = useDispatch();

  const handleAddItem = () => {
    dispatch(addItem('Grapes'));
  };

  const handleRemoveItem = () => {
    dispatch(removeItem());
  };

  const addFoodItem = (item) => {
    dispatch(addItem(item));
  };

  return !restaurant ? (
    <Shimmer />
  ) : (
    <>
      <div className="flex justify-evenly bg-black w-full h-52 p-5">
        <div className="justify-center">
          <img
            className="h-40"
            src={IMG_CDN_URL + restaurant.cloudinaryImageId}
            alt="Test"
          />
        </div>

        <div className="w-60">
          <div className="m-1 p-1">
            <p className="font-bold text-2xl text-white">{restaurant.name}</p>
            <p className="font-bold text-md text-white">{restaurant.city}</p>
            <p className="font-bold text-md text-white">{restaurant.area}</p>
          </div>
          <div className="flex justify-between divide-x">
            <p className="font-bold text-2xl text-white">
              ☆ {restaurant.avgRating}
            </p>

            <p className="font-bold text-2xl text-white ml-5">
              {restaurant.costForTwoMsg}
            </p>
          </div>
        </div>
        <div className=" w-60"></div>
      </div>
      <div>
        <button
          className="m-2 p-2 bg-green-300"
          onClick={() => handleAddItem()}
        >
          Add Item
        </button>
        <button
          className="m-2 p-2 bg-green-300"
          onClick={() => handleRemoveItem()}
        >
          Remove Item
        </button>
      </div>
      <div className="flex justify-center">
        <ul>
          <p className="font-bold border-b-2  m-2 text-2xl">Menu</p>
          {Object.values(restaurant?.menu?.items).map((item) => (
            <li className="m-2 text-lg font-thin" key={item?.id}>
              {item?.name} -{' '}
              <button
                className="p-2 m-2 bg-green-300"
                onClick={() => addFoodItem(item)}
              >
                Add
              </button>
            </li>
          ))}
          <p className="border-b-2 m-2"></p>
        </ul>
      </div>
    </>
  );
};
export default RestrauntMenu;
