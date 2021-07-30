import React, { useEffect, useState } from 'react';
import LowerMenu from '../components/LowerMenu';
import Header from '../components/Header';
import { fetchFoods } from '../services/API';

function Foods() {
  const [foods, setFoods] = useState([]);

  useEffect(() => {
    const fetchFood = async () => {
      const response = await fetchFoods();
      setFoods(response);
    };
    fetchFood();
  }, []);

  return (
    <div>
      <Header />
      <LowerMenu />
      <ul>
        {foods.map((food, index) => (
          <li key={ index }>{food.strMeal}</li>
        ))}
      </ul>
    </div>
  );
}

export default Foods;
