import { useState } from 'react';
import { dataList } from '../config';
import Card from './Card';

const Body = () => {
  const [searchTxt, setSearchTxt] = useState('');

  const onChangeValue = (e) => {
    setSearchTxt(e.target.value);
  };

  return (
    <>
      <div className="searchContainer">
        <input
          type="text"
          className="search-input"
          placeholder="Search"
          value={searchTxt}
          onChange={onChangeValue}
        />
        <button className="search-btn">Button</button>
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
