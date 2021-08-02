import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

function ButtonsCategories({ categoryName }) {
  const [categories, setCategories] = useState({ loading: ['true'] });

  useEffect(() => {
    function fetchAPI() {
      if (categoryName === 'Comidas') {
        fetch('https://www.themealdb.com/api/json/v1/1/list.php?c=list')
          .then((response) => response.json())
          .then((result) => {
            setCategories(result);
          });
      }
      if (categoryName === 'Bebidas') {
        fetch('https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list')
          .then((response) => response.json())
          .then((result) => {
            setCategories(result);
          });
      }
    }
    fetchAPI();
  }, [categoryName]);

  const supplyIdentity = Object.keys(categories)[0];

  const maxCardsOnPage = 5;
  const categoriesLimited = categories[supplyIdentity].slice(0, maxCardsOnPage);

  return (
    <div>
      <button type="button">All</button>
      {categoriesLimited.map((category, index) => (
        <button
          data-testid={ `${category.strCategory}-category-filter` }
          type="button"
          key={ index }
        >
          {category.strCategory}
        </button>
      ))}
    </div>
  );
}

export default ButtonsCategories;

ButtonsCategories.propTypes = {
  categoryName: PropTypes.string.isRequired,
};
