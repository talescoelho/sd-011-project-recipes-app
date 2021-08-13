import React, { useContext } from 'react';
import RecipesContext from '../../context/RecipesContext';

function DetailsHeader() {
  const { mealId } = useContext(RecipesContext);
  return (
    <div>
      <img
        src={ mealId.strMealThumb }
        alt={ mealId.strMeal }
        data-testid="recipe-photo"
        style={ { width: '50px', heigth: '50px' } }
      />
      <div>
        <h3 data-testid="recipe-title">{ mealId.strMeal }</h3>
        <p data-testid="recipe-category">{ mealId.strCategory }</p>
      </div>
    </div>
  );
}

export default DetailsHeader;
