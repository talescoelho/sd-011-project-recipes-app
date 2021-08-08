import React from 'react';
// import PropTypes from 'prop-types';
import RecipeCard from '../components/RecipeCard';
import IngredientsList from '../components/IngredientsList';
// import { APImealById } from '../services/APImealsANDdrinks';

function RecipesInProgress() {

  return (
    <div>
      <RecipeCard
        title={ MealDataAPI.strMeal }
        img={ MealDataAPI.strMealThumb }
        category={ MealDataAPI.strCategory }
        id={ MealDataAPI.idMeal }
      />
      {/* Colocar no lugar de IngredientsList um novo componente que será o Ingredients checkbox */}
      <IngredientsList meal={ MealDataAPI } />

      <button type="button" data-testid="finish-recipe-btn">
        Finalizar Receita
      </button>
    </div>
  );
}

export default RecipesInProgress;

// MealDetails.propTypes = {
//   match: PropTypes.objectOf(PropTypes.object).isRequired,
// };
