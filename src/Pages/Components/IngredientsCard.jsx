import React from 'react';
import PropTypes from 'prop-types';

export default function IngredientsCard({ ingredients, index }) {
  console.log(ingredients);
  const { strIngredient } = ingredients;

  // const [IngredientImageId, setIngredientImageId] = React.useState();
  const INGREDIENT_IMAGE = `https://www.themealdb.com/images/ingredients/${strIngredient}.png`;

  return (
    <div data-testid={ `${index}-ingredient-card` }>
      <img
        data-testid={ `${index}-card-img` }
        alt=""
        src={ INGREDIENT_IMAGE }
      />
      <div>
        <p data-testid={ `${index}-card-name` }>{strIngredient}</p>
      </div>
    </div>
  );
}

IngredientsCard.propTypes = {
  ingredients: PropTypes.objectOf(PropTypes.string.isRequired).isRequired,
  index: PropTypes.number.isRequired,
};
