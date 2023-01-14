import { useState, useEffect } from 'react';
import { dataList } from '../config';
import Card from './Card';

const Body = () => {
  //searchTxt  is local variable
  const [restaurant, setRestaurant] = useState();
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
    console.log(restaurantList);
    setRestaurant(restaurantList);
  }

  const onChangeValue = (e) => {
    setSearchText(e.target.value);
  };

  const filterData = () => {
    const filterData = dataList.filter((res) => res.name.includes(searchText));
    return filterData;
  };

  return (
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
            const data = filterData(dataList);
            setRestaurant(data);
          }}
        >
          Button
        </button>
      </div>
      <div className="cardList">
        {restaurant?.map((restaurant) => {
          debugger;
          return <Card {...restaurant.data} key={restaurant?.data?.id} />;
        })}
      </div>
    </>
  );
};

export default Body;
