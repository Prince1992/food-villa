import './App.css';

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
];

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

const Card = () => {
  return (
    <div className="card">
      <img
        alt="test "
        src="https://res.cloudinary.com/swiggy/image/upload/f_auto,q_auto,fl_lossy/b5bxxjd9nfgzow34wpck"
      />
      <h2>Pizza hut</h2>
      <h3>Itelian, Chezzz</h3>
      <h4>4.2 Rating</h4>
    </div>
  );
};

const Body = () => {
  return (
    <div className="cardList">
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  );
};
const Footer = () => {
  return <h1>Footer</h1>;
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
