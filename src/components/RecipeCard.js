import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function RecipeCard({ recipe, index }) {
  const { strDrink, strDrinkThumb, strMeal, strMealThumb, idMeal, idDrink } = recipe;
  const title = strDrink || strMeal;
  const thumb = strDrinkThumb || strMealThumb;
  const id = idMeal || idDrink;
  const path = idMeal ? `/comidas/${id}` : `/bebidas/${id}`;
  return (
    <Link to={ path }>
      <div
        data-testid={ `${index}-recipe-card` }
      >
        <img
          src={ thumb }
          alt={ title }
          data-testid={ `${index}-card-img` }
        />
        <h4
          data-testid={ `${index}-card-name` }
        >
          { title }
        </h4>
      </div>

    </Link>
  );
}

export default RecipeCard;

RecipeCard.propTypes = {
  recipe: PropTypes.shape(PropTypes.any).isRequired,
  index: PropTypes.number.isRequired,
};
