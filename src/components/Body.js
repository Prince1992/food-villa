import { dataList } from '../config';
import Card from './Card';

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
