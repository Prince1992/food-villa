import { useState } from 'react';
import { dataList } from '../config';
import Card from './Card';

const Body = () => {
  //searchTxt  is local variable
  const [searchInput, setSearchInput] = useState(''); // to create a state variable
  const [searchClicked, setSearchClicked] = useState('false');

  const onChangeValue = (e) => {
    setSearchInput(e.target.value);
  };

  return (
    <>
      <div className="searchContainer">
        <input
          type="text"
          className="search-input"
          placeholder="Search"
          value={searchInput}
          onChange={onChangeValue}
        />
        <h1>{searchClicked}</h1>
        <button className="search-btn">Button - {searchInput}</button>
      </div>
      <div className="cardList">
        {dataList.map((item) => {
          return <Card {...item} key={item.rating} />;
        })}
      </div>
    </>
  );
};

export default Body;
