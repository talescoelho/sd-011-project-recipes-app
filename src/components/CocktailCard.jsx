import React from 'react';
import '../styles/IngredientCard.css';
import PropTypes from 'prop-types';

function CocktailCard({ ingredient, index }) {
  return (
    <div
      className="ingredientCardContainer"
      data-testid={ `${index}-recipe-card` }
    >
      <img
        className="ingredientImageRecipe"
        src={ `https://www.themealdb.com/images/ingredients/${ingredient.strIngredient1}.png` }
        alt=" Recipe"
        data-testid={ `${index}-card-img` }
      />
      <p
        data-testid={ `${index}-card-name` }
        className="ingredientNameRecipe"
      >
        {
          ingredient.strIngredient1
        }
      </p>
    </div>
  );
}

export default CocktailCard;

CocktailCard.propTypes = {
  index: PropTypes.number,
  ingredient: PropTypes.object,
}.isRequired;
