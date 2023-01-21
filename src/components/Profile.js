import { useState } from 'react';

export const Profile = ({ name }) => {
  const [count, setCount] = useState(10);
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
