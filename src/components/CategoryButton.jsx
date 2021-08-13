import React, { useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useLocation } from 'react-router';
import RecipesContext from '../context/RecipesContext';

function CategoryButton({ categoryName }) {
  const { currentCategory, setCurrentCategory } = useContext(RecipesContext);
  const { pathname } = useLocation();

  const handleToggleCategory = (category) => {
    if (currentCategory === category) {
      return setCurrentCategory('All');
    }
    if (currentCategory !== category) {
      return setCurrentCategory(category);
    }
  };

  useEffect(() => {
    const ex = document.querySelector('.selectedCat');
    if (ex) ex.classList.remove('selectedCat');
    document.querySelector(`.${currentCategory}`).classList.add('selectedCat');
  }, [currentCategory, pathname]);

  const changeStyle = () => {
    const ex = document.querySelector('.selectedCat');
    console.log(ex);
    if (ex) ex.classList.remove('selectedCat');
    const sel = (document.querySelector(`.${categoryName}`));
    sel.classList.add('selectedCat');
  };

  return (
    <button
      type="button"
      className={ `catBtn ${categoryName}` }
      data-testid={ `${categoryName}-category-filter` }
      onClick={ () => {
        handleToggleCategory(categoryName);
        changeStyle();
      } }
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
