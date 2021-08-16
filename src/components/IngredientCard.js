import React from 'react';
import PropTypes from 'prop-types';

function IngredientCard({ ingredient, index, recipeType }) {
  const getIngredientImg = (ingredientName) => {
    if (recipeType === 'meals') {
      return `https://www.themealdb.com/images/ingredients/${ingredientName}-Small.png`;
    }
    return `https://www.thecocktaildb.com/images/ingredients/${ingredientName}-Small.png`;
  };

  const ingredientImg = getIngredientImg(ingredient.strIngredient
    || ingredient.strIngredient1);
  return (
    <div
      className="card border border-danger"
      data-testid={ `${index}-ingredient-card` }
    >
      <div className="card-img-top align-img-center">
        <img
          className=""
          src={ ingredientImg }
          alt={ ingredient.strIngredient || ingredient.strIngredient1 }
          data-testid={ `${index}-card-img` }
        />
      </div>
      <div className="card-inner">
        <h2 className="title-recipe" data-testid={ `${index}-card-name` }>
          { ingredient.strIngredient || ingredient.strIngredient1 }
        </h2>
      </div>
    </div>
  );
}

IngredientCard.propTypes = {
  ingredient: PropTypes.objectOf(PropTypes.string).isRequired,
  index: PropTypes.number.isRequired,
  recipeType: PropTypes.string.isRequired,
};

export default IngredientCard;
