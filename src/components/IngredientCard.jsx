import React from 'react';
import '../styles/IngredientCard.css';
import PropTypes from 'prop-types';

function IngredientCard({ ingredient, index }) {
  return (
    <div
      className="ingredientCardContainer"
      data-testid={ `${index}-recipe-card` }
    >
      <img
        className="ingredientImageRecipe"
        src={ `https://www.themealdb.com/images/ingredients/${ingredient.strIngredient}.png` }
        alt=" Recipe"
        data-testid={ `${index}-card-img` }
      />
      <p
        data-testid={ `${index}-card-name` }
        className="ingredientNameRecipe"
      >
        {
          ingredient.strIngredient
        }
      </p>
    </div>
  );
}

export default IngredientCard;

IngredientCard.propTypes = {
  recipe: PropTypes.objectOf(String),
  index: PropTypes.number,
  type: PropTypes.string,
}.isRequired;
