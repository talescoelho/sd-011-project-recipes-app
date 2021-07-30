import React, { useEffect, useState } from 'react';
import LowerMenu from '../components/LowerMenu';
import Header from '../components/Header';
import { fetchDrinks } from '../services/API';

function Drinks() {
  const [drinks, setDrinks] = useState([]);

  useEffect(() => {
    const fetchDrink = async () => {
      const response = await fetchDrinks();
      setDrinks(response);
    };
    fetchDrink();
  }, []);

  return (
    <div>
      <Header />
      <LowerMenu />
      <ul>
        {drinks.map((drink, index) => (
          <li key={ index }>{drink.strDrink}</li>
        ))}
      </ul>
    </div>
  );
}

export default Drinks;
