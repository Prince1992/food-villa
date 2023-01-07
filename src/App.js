import './App.css';

const Title = () => {
  return (
    <img
      className="logo"
      alt="test"
      src="https://yt3.ggpht.com/ytc/AMLnZu_EC-ECXAxRAixWGEfMsE1rdSoetBHyxmLNdtCB=s900-c-k-c0x00ffffff-no-rj"
    />
  );
};

const Header = () => {
  return (
    <div className="header">
      <Title />
      <div className="nav-bar">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

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
const Footer = () => {
  return (
    <div className="footer">
      <ul>
        <li>Test</li>
        <li>Test</li>
        <li>Test</li>
        <li>Test</li>
        <li>Test</li>
      </ul>
    </div>
  );
};
function AppLayout() {
  return (
    <>
      <Header />
      <Body />
      <Footer />
    </>
  );
}

export default AppLayout;
