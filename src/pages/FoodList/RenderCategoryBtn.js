import React from 'react';

const renderCategoriesBtn = () => {
  const maxLength = 5;
  const categories = receiveFoodRecipes.meals
    .map((category, index) => {
      if (index < maxLength) {
        return (
          <button
            type="button"
            data-testid={ `${category.strCategory}-category-filter` }
          >
            { category.strCategory }
          </button>
        );
      }
      return null;
    });
  return categories;
};

export default renderCategoriesBtn;
