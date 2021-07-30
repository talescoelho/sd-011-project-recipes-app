import React, { useEffect, useState } from 'react';
import data from '../mock/meals';

import getCategories from '../services/getCategories';

export default function TelaPrincipalComidas() {
  const { meals } = data;
  const [mealsCategories, setMealsCategories] = useState([]);

  const [filter, setFilter] = useState('');

  async function fetchCategories() {
    const categories = await getCategories('meal');
    setMealsCategories(categories.meals);
  }

  useEffect(() => {
    fetchCategories();
  }, []);

  let filteredMeals = meals;
  if (filter !== '') {
    filteredMeals = meals.filter(({ strCategory }) => strCategory === filter);
  }

  const categoryLimit = 5;
  const cardLimit = 12;
  return (
    <div>
      <div>
        {
          mealsCategories.map(({ strCategory }, index) => (
            index < categoryLimit
              ? (
                <button
                  type="button"
                  key={ strCategory }
                  onClick={ () => setFilter(strCategory) }
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
        filteredMeals.map(({ idMeal, strMeal, strMealThumb }, index) => (
          index < cardLimit
            ? (
              <div key={ idMeal } data-testid={ `${index}-recipe-card` }>
                <img src={ strMealThumb } alt="" data-testid={ `${index}-card-img` } />
                <p data-testid={ `${index}-card-name` }>{strMeal}</p>
              </div>)
            : null
        ))
      }
    </div>
  );
}
