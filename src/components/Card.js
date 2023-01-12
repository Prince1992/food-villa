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

export default Card;
