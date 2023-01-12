const dataList = [
  {
    name: 'Burker King',
    image:
      'https://res.cloudinary.com/swiggy/image/upload/f_auto,q_auto,fl_lossy/b5bxxjd9nfgzow34wpck',
    cusines: ['Burger', 'Americano'],
    rating: '4.2',
  },
  {
    name: 'Mac De King',
    image:
      'https://res.cloudinary.com/swiggy/image/upload/f_auto,q_auto,fl_lossy/b5bxxjd9nfgzow34wpck',
    cusines: ['Burger', 'Americano'],
    rating: '4.5',
  },
  {
    name: 'Mac De King',
    image:
      'https://res.cloudinary.com/swiggy/image/upload/f_auto,q_auto,fl_lossy/b5bxxjd9nfgzow34wpck',
    cusines: ['Burger', 'Americano'],
    rating: '4.5',
  },
  {
    name: 'Mac De King',
    image:
      'https://res.cloudinary.com/swiggy/image/upload/f_auto,q_auto,fl_lossy/b5bxxjd9nfgzow34wpck',
    cusines: ['Burger', 'Americano'],
    rating: '4.5',
  },
  {
    name: 'Mac De King',
    image:
      'https://res.cloudinary.com/swiggy/image/upload/f_auto,q_auto,fl_lossy/b5bxxjd9nfgzow34wpck',
    cusines: ['Burger', 'Americano'],
    rating: '4.5',
  },
  {
    name: 'Mac De King',
    image:
      'https://res.cloudinary.com/swiggy/image/upload/f_auto,q_auto,fl_lossy/b5bxxjd9nfgzow34wpck',
    cusines: ['Burger', 'Americano'],
    rating: '4.5',
  },
  {
    name: 'Mac De King',
    image:
      'https://res.cloudinary.com/swiggy/image/upload/f_auto,q_auto,fl_lossy/b5bxxjd9nfgzow34wpck',
    cusines: ['Burger', 'Americano'],
    rating: '4.5',
  },
  {
    name: 'Mac De King',
    image:
      'https://res.cloudinary.com/swiggy/image/upload/f_auto,q_auto,fl_lossy/b5bxxjd9nfgzow34wpck',
    cusines: ['Burger', 'Americano'],
    rating: '4.5',
  },
  {
    name: 'Mac De King',
    image:
      'https://res.cloudinary.com/swiggy/image/upload/f_auto,q_auto,fl_lossy/b5bxxjd9nfgzow34wpck',
    cusines: ['Burger', 'Americano'],
    rating: '4.5',
  },
  {
    name: 'Mac De King',
    image:
      'https://res.cloudinary.com/swiggy/image/upload/f_auto,q_auto,fl_lossy/b5bxxjd9nfgzow34wpck',
    cusines: ['Burger', 'Americano'],
    rating: '4.5',
  },
];

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
