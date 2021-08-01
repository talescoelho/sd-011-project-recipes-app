import React, { useContext } from 'react';
import RecipesContext from '../context/RecipesContext';

function CategoryButton({ categoryName }) {
  const { setCurrentCategory } = useContext(RecipesContext);
  return (
    <button
      type="button"
      data-testid={ `${categoryName}-category-filter` }
      onClick={ () => setCurrentCategory(categoryName) }
    >
      { categoryName }
    </button>
  );
}

export default CategoryButton;
