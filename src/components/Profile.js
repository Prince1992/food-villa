import { useEffect, useState } from 'react';

export const Profile = ({ name }) => {
  const [count, setCount] = useState(10);
  useEffect(() => {
    console.log('use Effect');
    const timer = setInterval(() => {
      console.log('Amar set Interval>>>');
    }, 1000);

    return () => {
      console.log('Use Effect Return');
      clearInterval(timer);
    };
  });
  console.log('render funntion');

  return (
    <div>
      <h2>Its Profile Compoenet</h2>
      <h2>Testinf</h2>
      <h2>{count}</h2>
      <button onClick={() => setCount(1)}>Set Count</button>
    </div>
  );
};

export default Profile;
