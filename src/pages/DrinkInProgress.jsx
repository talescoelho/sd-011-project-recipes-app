import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import RecipeCard from '../components/RecipeCard';
import IngredientsList from '../components/IngredientsList';
import { APIDrinksById } from '../services/APImealsANDdrinks';
import '../css/footerMenu.css';

function MealsInProgress({ match: { params } }) {
  const [DrinkDataAPI, setDrinkDadaAPI] = useState({});

  const objectRecipe = {
    id: DrinkDataAPI.idDrink,
    type: 'bebida',
    area: '',
    category: DrinkDataAPI.strCategory,
    alcoholicOrNot: DrinkDataAPI.strAlcoholic,
    name: DrinkDataAPI.strDrink,
    image: DrinkDataAPI.strDrinkThumb,
  };

  useEffect(() => {
    const { id } = params;
    const requestDrink = async () => {
      const response = await APIDrinksById(id);
      setDrinkDadaAPI(response.drinks[0]);
    };
    requestDrink();
  }, [params]);

  return (
    <div>
      <RecipeCard data={ objectRecipe } />

      <IngredientsList recipe={ DrinkDataAPI } inProgress />

      <p data-testid="instructions">
        <h2>Instructions</h2>
        {DrinkDataAPI.strInstructions}
      </p>
      <button type="button" data-testid="finish-recipe-btn">
        Finalizar Receita
      </button>
    </div>
  );
}

export default MealsInProgress;

MealsInProgress.propTypes = {
  match: PropTypes.objectOf(PropTypes.string).isRequired,
};
