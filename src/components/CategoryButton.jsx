import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import RecipesContext from '../context/RecipesContext';
import '../styles/CategoryButton.css';

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

  const changeStyle = (target) => {
    const ex = document.querySelector('.selectedCat');
    console.log(ex)
    if (ex) ex.classList.remove('selectedCat')
    const sel = (document.querySelector(`.${categoryName}`));
    sel.classList.add('selectedCat');
  }

  return (
    <button
      type="button"
      className={`catBtn ${categoryName}`}
      data-testid={ `${categoryName}-category-filter` }
      onClick={ ({ target }) => {
        handleToggleCategory(categoryName);
        changeStyle(target)
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
