import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import RecipeCard from '../components/RecipeCard';
import IngredientsList from '../components/IngredientsList';
import { APImealById } from '../services/APImealsANDdrinks';
import '../css/footerMenu.css';

function MealsInProgress({ match: { params } }) {
  const [MealDataAPI, setMealDadaAPI] = useState({});
  const objectRecipe = {
    id: MealDataAPI.idMeal,
    type: 'comida',
    area: MealDataAPI.strArea,
    category: MealDataAPI.strCategory,
    alcoholicOrNot: '',
    name: MealDataAPI.strMeal,
    image: MealDataAPI.strMealThumb,
  };

  useEffect(() => {
    const { id } = params;
    const requestMeal = async () => {
      const response = await APImealById(id);
      setMealDadaAPI(response.meals[0]);
    };
    requestMeal();
  }, [params]);

  return (
    <div>
      <RecipeCard
        title={ MealDataAPI.strMeal }
        img={ MealDataAPI.strMealThumb }
        category={ MealDataAPI.strCategory }
        id={ MealDataAPI.idMeal }
        data={ objectRecipe }
      />

      <IngredientsList recipe={ MealDataAPI } />

      <p data-testid="instructions">
        <h2>Instructions</h2>
        {MealDataAPI.strInstructions}
      </p>

    </div>
  );
}

export default MealsInProgress;

MealsInProgress.propTypes = {
  match: PropTypes.objectOf(PropTypes.string).isRequired,
};
