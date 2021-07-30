import React, { useEffect, useState } from 'react';
import data from '../mock/drinks';

import getCategories from '../services/getCategories';

export default function TelaPrincipalBebidas() {
  const { drinks } = data;
  const [drinksCategories, setDrinksCategories] = useState([]);

  async function fetchCategories() {
    const categories = await getCategories('cocktail');
    setDrinksCategories(categories.drinks);
  }

  useEffect(() => {
    fetchCategories();
  }, []);

  const categoryLimit = 5;
  const cardLimit = 12;
  return (
    <div>
      <div>
        {
          drinksCategories.map(({ strCategory }, index) => (
            index < categoryLimit
              ? (
                <button
                  type="button"
                  key={ strCategory }
                  data-testid={ `${strCategory}-category-filter` }
                >
                  {strCategory}
                </button>
              )
              : null
          ))
        }
      </div>
      {
        drinks.map(({ idDrink, strDrink, strDrinkThumb }, index) => (
          index < cardLimit
            ? (
              <div key={ idDrink } data-testid={ `${index}-recipe-card` }>
                <img src={ strDrinkThumb } alt="" data-testid={ `${index}-card-img` } />
                <p data-testid={ `${index}-card-name` }>{strDrink}</p>
              </div>)
            : null
        ))
      }
    </div>
  );
}
