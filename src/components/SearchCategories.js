import React, { useContext } from 'react';
import AppContext from '../context/AppContext';

function SearchCategories({ type }) {
  const { foodCategories, drinkCategories } = useContext(AppContext);
  const useData = type === 'food' ? foodCategories.meals : drinkCategories.drinks;
  const CATEGORY_NUMER = 5;

  return (
    <div>
      <button type="button" value="ALL">All</button>
      {useData.map((category, index) => (
        index < CATEGORY_NUMER && (
          <button
            type="button"
            key={ index }
            data-testid={ `${category.strCategory}-category-filter` }
          >
            {category.strCategory}
          </button>)
      ))}
    </div>
  );
}

export default SearchCategories;
