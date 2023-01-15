import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { IMG_CDN_URL } from '../config';
import Shimmer from './Shimmer';
const RestrauntMenu = () => {
  // How to read dynamic url parameters
  const [resInfo, setResInfo] = useState(null);

  const params = useParams();
  const { id } = params;
  console.log(id);

  useEffect(() => {
    getRestaurantInfo();
  }, []);

  async function getRestaurantInfo() {
    const data = await fetch(
      `https://www.swiggy.com/dapi/menu/v4/full?lat=28.5355161&lng=77.3910265&menuId=${id}`
    );
    const json = await data.json();
    console.log(json.data);
    setResInfo(json.data);
  }

  return !resInfo ? (
    <Shimmer />
  ) : (
    <div>
      <h1>Restrauent id: {resInfo.id}</h1>
      <h2>{resInfo.name}</h2>
      <h2>{resInfo.area}</h2>
      <h2>{resInfo.city}</h2>
      <h2>{resInfo.costForTwoMsg}</h2>
      <h2>{resInfo.avgRating}</h2>
      <img src={IMG_CDN_URL + resInfo.cloudinaryImageId} alt="Test" />
      <div className="menu">
        <h2>Menu</h2>
        <ul>
          {Object.values(resInfo?.menu?.items).map((item) => (
            <li key={item?.id}>{item?.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default RestrauntMenu;
