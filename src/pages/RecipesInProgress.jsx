import React from 'react';
import RecipeCard from '../components/RecipeCard';
import IngredientsList from '../components/IngredientsList';

function RecipesInProgress() {
  return (
    <div>
      <RecipeCard
        title={ MealDataAPI.strMeal }
        img={ MealDataAPI.strMealThumb }
        category={ MealDataAPI.strCategory }
        id={ MealDataAPI.idMeal }
      />
      <IngredientsList meal={ MealDataAPI } />

      <button type="button" data-testid="finish-recipe-btn">
        Finalizar Receita
      </button>
    </div>
  );
}

export default RecipesInProgress;
