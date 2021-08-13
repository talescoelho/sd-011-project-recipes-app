import React, { useContext } from 'react';
import GlobalContext from '../context';

export default function MealCategoryButton() {
  const { mealCategories, filterMealsByCategory } = useContext(GlobalContext);

  const four = 4;

  function filter() {
    const fiveCategories = [];
    mealCategories.forEach((category, index) => {
      if (index <= four) {
        fiveCategories.push(category);
      }
    });
    return fiveCategories;
  }

  const categoriesArray = filter();

  function handleFilterClick({ target }) {
    const { id } = target;
    filterMealsByCategory(id);
  }

  return (
    <div className="filters-container">
      <button
        data-testid="All-category-filter"
        id="All"
        onClick={ handleFilterClick }
        type="button"
      >
        All
      </button>
      {categoriesArray ? categoriesArray.map((category, index) => (
        <button
          data-testid={ `${category.strCategory}-category-filter` }
          id={ category.strCategory }
          key={ index }
          onClick={ handleFilterClick }
          type="button"
        >
          {category.strCategory}
        </button>
      )) : <span className="loading" />}
    </div>
  );
}
