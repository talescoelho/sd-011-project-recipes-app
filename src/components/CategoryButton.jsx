import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import RecipesContext from '../context/RecipesContext';

function CategoryButton({ categoryName }) {
  const { currentCategory, setCurrentCategory } = useContext(RecipesContext);

  const handleToggleCategory = (category) => {
    if (currentCategory === category) {
      return setCurrentCategory('All');
    }
    if (currentCategory !== category) {
      return setCurrentCategory(category);
    }
  };

  return (
    <button
      type="button"
      data-testid={ `${categoryName}-category-filter` }
      onClick={ () => handleToggleCategory(categoryName) }
    >
      { categoryName }
    </button>
  );
}

CategoryButton.defaultProps = {
  categoryName: PropTypes.string,
};

CategoryButton.propTypes = {
  categoryName: PropTypes.string,
};

export default CategoryButton;
