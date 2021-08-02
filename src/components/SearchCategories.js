import React, { useContext } from 'react';
import AppContext from '../context/AppContext';

function SearchCategories({ type }) {
  const {
    foodCategories,
    drinkCategories,
    setData,
    switchFilter,
    filter,
  } = useContext(AppContext);

  const useData = type === 'food' ? foodCategories.meals : drinkCategories.drinks;
  const CATEGORY_NUMER = 5;

  const searchByCategory = (category) => {
    switchFilter(category);

    switch (type) {
    case 'food':
      fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`)
        .then((response) => response.json())
        .then((rdata) => setData(rdata));
      break;

    case 'drink':
      fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${category}`)
        .then((response) => response.json())
        .then((rdata) => setData(rdata));
      break;

    default:
      break;
    }
  };

  return (
    <div>
      <button
        type="button"
        value="All"
        onClick={ ({ target }) => searchByCategory(target.value) }
      >
        All
      </button>
      {useData.map((category, index) => (
        index < CATEGORY_NUMER && (
          <button
            value={ category.strCategory }
            type="button"
            key={ index }
            data-testid={ `${category.strCategory}-category-filter` }
            onClick={ ({ target }) => {
              searchByCategory(target.value);
            } }
          >
            {category.strCategory}
          </button>)
      ))}
    </div>
  );
}

export default SearchCategories;
