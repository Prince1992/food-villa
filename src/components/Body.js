import { useState, useEffect } from 'react';
import Card from './Card';
import Shimmer from './Shimmer';
import { Link } from 'react-router-dom';
import { filterData } from '../utils/helper';
import useOnline from '../utils/useOnline';

const Body = () => {
  //searchTxt  is local variable
  const [allRestaurant, setAllRestaurant] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [searchText, setSearchText] = useState(''); // to create a state variable

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
      <h1 class="font-bold text-xl text-green-600">Hello Word</h1>
      <h1 class="font-bold text-2xl">Hello Word 2</h1>
      <div className="searchContainer">
        <input
          type="text"
          className="search-input"
          placeholder="Search"
          value={searchText}
          onChange={onChangeValue}
        />

        <button
          className="search-btn"
          style={{ backgroundColor: 'lightgrey' }}
          onClick={() => {
            const data = filterData(searchText, allRestaurant);
            setFilteredRestaurant(data);
          }}
        >
          Search
        </button>
      </div>
      <div className="cardList">
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
