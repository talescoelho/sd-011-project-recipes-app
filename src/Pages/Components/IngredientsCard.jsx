import React from 'react';
import PropTypes from 'prop-types';

export default function IngredientsCard({ ingredient, index, type }) {
  let strName;
  let INGREDIENT_IMAGE;
  if (type === 'drink') {
    strName = ingredient.strIngredient1;
    INGREDIENT_IMAGE = `https://www.thecocktaildb.com/images/ingredients/${strName}.png`;
  } else {
    strName = ingredient.strIngredient;
    INGREDIENT_IMAGE = `https://www.themealdb.com/images/ingredients/${strName}.png`;
  }

  return (
    <div data-testid={ `${index}-ingredient-card` }>
      <img
        data-testid={ `${index}-card-img` }
        alt={ `Imagem of a/an ${strName}` }
        src={ INGREDIENT_IMAGE }
      />
      <div>
        <p data-testid={ `${index}-card-name` }>{strName}</p>
      </div>
    </div>
  );
}

IngredientsCard.propTypes = {
  ingredient: PropTypes.objectOf(PropTypes.string.isRequired).isRequired,
  index: PropTypes.number.isRequired,
  type: PropTypes.isRequired,
};
