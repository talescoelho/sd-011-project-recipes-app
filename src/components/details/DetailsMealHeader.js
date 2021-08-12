import React, { useContext } from 'react';
import RecipesContext from '../../context/RecipesContext';

function DetailsHeader() {
  const { mealId } = useContext(RecipesContext);
  return (
    <div className="details-header">
      <img
        src={ mealId.strMealThumb }
        alt={ mealId.strMeal }
        data-testid="recipe-photo"
      />
      <div>
        <h3 data-testid="recipe-title">{ mealId.strMeal }</h3>
        <p data-testid="recipe-category">{ mealId.strCategory }</p>
      </div>
    </div>
  );
}

export default DetailsHeader;
