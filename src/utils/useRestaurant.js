/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import { FETCH_MENU } from '../config';

const useRestaurant = (id) => {
  const [restaurant, setRestaurant] = useState(null);
  useEffect(() => {
    getRestaurantInfo();
  }, []);
  async function getRestaurantInfo() {
    const data = await fetch(FETCH_MENU + id);
    const json = await data.json();
    setRestaurant(json.data);
  }

  return restaurant;
};

export default useRestaurant;
