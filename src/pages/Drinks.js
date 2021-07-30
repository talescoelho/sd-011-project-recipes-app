import React, { useState, useEffect } from 'react';
import ButtonDrinksCategories from '../components/ButtonDrinksCategories';
import Footer from '../components/Footer';
import Header from '../components/Header';

export default function Drinks() {
  const [data, setData] = useState([]);

  async function fetchFoods() {
    const endpoint = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';
    const response = await fetch(endpoint);
    const json = await response.json();
    setData(json);
  }

  useEffect(() => {
    fetchFoods();
  }, []);

  const maxArray = 12;
  return (
    <main>
      <Header title="Bebidas" />
      <ButtonDrinksCategories />
      {data.length === 0 ? <p>Loading</p>
        : data.drinks.slice(0, maxArray).map((drink, index) => (
          <div key={ index } data-testid={ `${index}-recipe-card` }>
            <img
              src={ drink.strDrinkThumb }
              alt="comida_principal"
              data-testid={ `${index}-card-img` }
              width="50px"
            />
            <p data-testid={ `${index}-card-name` }>{drink.strDrink}</p>
          </div>
        ))}
      <Footer />
    </main>
  );
}
