import React, { useContext } from 'react';
import RecipeAppContext from '../context/RecipeAppContext';

function RenderDrinkRecomendation() {
  const { recomMeal } = useContext(RecipeAppContext);
  const maxLength = 6;
  return (
    recomMeal.map((recipe, index) => {
      if (index < maxLength) {
        return (
          <div
            key={ recipe.strMeal }
            data-testid={ `${index}-recomendation-card` }
          >
            <img
              src={ recipe.strMealThumb }
              alt={ recipe.strMeal }
              height="100px"
              width="100px"
            />
            <h5>{ recipe.strMeal }</h5>
          </div>
        );
      }
      return null;
    })
  );
}

export default RenderDrinkRecomendation;
