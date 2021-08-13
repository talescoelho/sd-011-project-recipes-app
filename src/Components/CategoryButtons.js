import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

export default function CategoryButtons() {
  const [category, setCategory] = useState([]);
  const history = useHistory();
  const { pathname } = history.location;

  const fetchCategoryMeal = async () => {
    const URL = 'https://www.themealdb.com/api/json/v1/1/list.php?c=list';
    const result = await fetch(URL);
    const { meals } = await result.json();
    if (meals.length) history.push(/comidas/);
    setCategory(meals);
  };

  const fetchCategoryDrink = async () => {
    const URL = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list';
    const result = await fetch(URL);
    const { drinks } = await result.json();
    if (drinks.length) history.push(/bebidas/);
    setCategory(drinks);
  };

  function chooseFood() {
    if (pathname === '/bebidas') {
      return fetchCategoryDrink();
    }
    return fetchCategoryMeal();
  }

  useEffect(() => {
    fetchCategoryMeal();
    fetchCategoryDrink();
    chooseFood();
  }, []);

  const maxList = 5;

  return (
    <div>
      <button id="btn-all" type="button" data-testid="All">All</button>
      {category.length > 0 && category.map(( { strCategory }, index) => (
        index < maxList && (
          <label htmlFor={ `${strCategory}${index}` } key={ index }>
            <button
              type="button"
              data-testid={ `${strCategory}-category-filter` }
            >
              { strCategory }
            </button>
          </label>
        )
      ))}
    </div>
  );
}
