import { dataList } from '../config';

const Card = ({ name, image, cusines, rating }) => {
  return (
    <div className="card">
      <img alt="test " src={image} />
      <h2>{name}</h2>
      <h3>{cusines.join(',')}</h3>
      <h4>{rating}</h4>
    </div>
  );
};
const Body = () => {
  return (
    <div className="cardList">
      {dataList.map((item) => {
        return <Card {...item} />;
      })}
    </div>
  );
};

export default Body;
