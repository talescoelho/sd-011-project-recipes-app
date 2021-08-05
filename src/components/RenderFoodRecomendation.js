import React, { useContext } from 'react';
import RecipeAppContext from '../context/RecipeAppContext';

function RenderFoodRecomendation() {
  const { recomDrink } = useContext(RecipeAppContext);
  const maxLength = 6;
  return (
    recomDrink.map((recipe, index) => {
      if (index < maxLength) {
        return (
          <div
            key={ recipe.strDrink }
            data-testid={ `${index}-recomendation-card` }
          >
            <img
              src={ recipe.strDrinkThumb }
              alt={ recipe.strDrink }
              height="100px"
              width="100px"
            />
            <h5>{ recipe.strDrink }</h5>
          </div>
        );
      }
      return null;
    })
  );
}

export default RenderFoodRecomendation;
