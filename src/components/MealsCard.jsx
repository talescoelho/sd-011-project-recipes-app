import React from 'react';
import '../styles/IngredientCard.css';
import PropTypes from 'prop-types';

function MealsCard({ ingredient, index }) {
  return (
    <div
      className="ingredientCardContainer"
      data-testid={ `${index}-ingredient-card` }
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

export default MealsCard;

MealsCard.propTypes = {
  index: PropTypes.number,
  ingredient: PropTypes.object,
}.isRequired;
