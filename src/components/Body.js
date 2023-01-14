import { useState, useEffect } from 'react';
import Card from './Card';
import Shimmer from './Shimmer';

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

  const filterData = () => {
    console.log(allRestaurant);
    const filterData = allRestaurant.filter((res) =>
      res?.data?.name?.toLowerCase().includes(searchText.toLowerCase())
    );
    return filterData;
  };

  console.log('Render');

  //if restaurant is empty => load shimmer UI
  // if restaurant has data => actual data

  if (!allRestaurant) return null;

  return allRestaurant.length === 0 ? (
    <Shimmer />
  ) : (
    <>
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
          onClick={() => {
            const data = filterData(allRestaurant);
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
            return <Card {...restaurant.data} key={restaurant?.data?.id} />;
          })
        )}
      </div>
    </>
  );
};

export default Body;
