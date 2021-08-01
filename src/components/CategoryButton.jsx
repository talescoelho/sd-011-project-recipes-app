import React, { useContext } from 'react';
import PropTypes from 'prop-types';

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

CategoryButton.propTypes = {
  categoryName: PropTypes.string.isRequired,
};

export default CategoryButton;
