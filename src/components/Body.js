import { useState, useEffect, useContext } from 'react';
import Card from './Card';
import Shimmer from './Shimmer';
import { Link } from 'react-router-dom';
import { filterData } from '../utils/helper';
import useOnline from '../utils/useOnline';
import UserContext from '../utils/UserContext';

const Body = () => {
  //searchTxt  is local variable
  const [allRestaurant, setAllRestaurant] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [searchText, setSearchText] = useState(''); // to create a state variable
  const { user, setUser } = useContext(UserContext);

  useEffect(() => {
    // API call
    getRestaurant();
  }, []);

  async function getRestaurant() {
    const data = await fetch(
      'https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.5355161&lng=77.3910265&page_type=DESKTOP_WEB_LISTING'
    );
    const json = await data.json();
    const restaurantList = json?.data?.cards[2]?.data?.data?.cards;
    setAllRestaurant(restaurantList);
    setFilteredRestaurant(restaurantList);
  }

  const onChangeValue = (e) => {
    setSearchText(e.target.value);
  };

  //if restaurant is empty => load shimmer UI
  // if restaurant has data => actual data
  const isOnline = useOnline();
  if (!isOnline) {
    return <h1>Offline - Check your Internet Connection</h1>;
  }

  if (!allRestaurant) return null;

  return allRestaurant.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="flex justify-center space-x-4">
        <div className="flex justify-center rounded-md w-full overflow-hidden">
          <input
            type="text"
            className="border-2 border-purple-900 focus:bg-lime-100 rounded-l-md w-1/2 py-2 px-4 mt-4 mb-4"
            placeholder="Search"
            value={searchText}
            onChange={onChangeValue}
          />

          <button
            className="bg-violet-500 hover:bg-purple-900 text-white rounded-r-md py-2 px-4 mt-4 mb-4"
            onClick={() => {
              const data = filterData(searchText, allRestaurant);
              setFilteredRestaurant(data);
            }}
          >
            Search
          </button>
        </div>

        {/* <input
          value={user.name}
          onChange={(e) => {
            setUser({
              ...user,
              name: e.target.value,
            });
          }}
        />
        <input
          value={user.email}
          onChange={(e) => {
            setUser({
              ...user,
              email: e.target.value,
            });
          }}
        /> */}
      </div>
      <div className="flex flex-wrap justify-between mt-8 ">
        {filteredRestaurant.length === 0 ? (
          <h1>No Restaurant Found....</h1>
        ) : (
          filteredRestaurant?.map((restaurant) => {
            return (
              <Link
                to={'/restaurant/' + restaurant.data.id}
                key={restaurant?.data?.id}
              >
                <Card {...restaurant.data} key={restaurant?.data?.id} />
              </Link>
            );
          })
        )}
      </div>
    </>
  );
};

export default Body;
