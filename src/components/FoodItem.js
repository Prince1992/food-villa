import { useContext } from 'react';
import { IMG_CDN_URL } from '../config';
import UserContext from '../utils/UserContext';
const FoodItem = ({ name, description, cloudinaryImageId, price }) => {
  const { user } = useContext(UserContext);
  return (
    <div className="max-w-xs mb-4 bg-white border border-gray-200 rounded-xl shadow dark:bg-gray-800 dark:border-gray-700">
      <img
        className="rounded-t-lg"
        alt="test "
        src={IMG_CDN_URL + cloudinaryImageId}
      />
      <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 break-words">
        {name}
      </p>

      <div className="p-5">
        <h5 className="mb-2 text-md font-bold tracking-tight text-gray-900 dark:text-white">
          {description}
        </h5>

        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 break-words">
          Price - {price / 100}
        </p>
      </div>
    </div>
  );
};

export default FoodItem;
