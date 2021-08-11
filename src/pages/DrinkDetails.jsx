import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import RecipeCard from '../components/RecipeCard';
import RecommendationsM from '../components/RecommendationsM';
import IngredientsList from '../components/IngredientsList';
import { APIDrinksById } from '../services/APImealsANDdrinks';
import '../css/footerMenu.css';

function DrinkDetails({ match: { params } }) {
  const [DrinkDataAPI, setDrinkDadaAPI] = useState({});
  const [isMealDone, setIsMealsDone] = useState(false);
  function verifyRecipeDone(id) {
    const doneRecipes = JSON.parse(localStorage.getItem('doneRecipes'));
    if (doneRecipes !== null) {
      const filter = doneRecipes.filter((recipe) => recipe.id === id);
      if (filter.length >= 1) {
        setIsMealsDone(true);
      }
    }
  }
  function renderButton() {
    return (
      <button className="footer" type="button" data-testid="start-recipe-btn">
        Iniciar Receita
      </button>
    );
  }
  useEffect(() => {
    const { id } = params;
    const requestDrink = async () => {
      const response = await APIDrinksById(id);
      setDrinkDadaAPI(response.drinks[0]);
    };
    verifyRecipeDone(id);
    requestDrink();
  }, [params]);

  return (
    <div>
      <RecipeCard
        title={ DrinkDataAPI.strDrink }
        img={ DrinkDataAPI.strDrinkThumb }
        category={ DrinkDataAPI.strAlcoholic }
        id={ DrinkDataAPI.idDrink }
      />

      <IngredientsList recipe={ DrinkDataAPI } />

      <p data-testid="instructions">
        <h2>Instructions</h2>
        {DrinkDataAPI.strInstructions}
      </p>

      {/* passar algum atributo para o recomendações de modo a
      identificar se renderiza bebidas ou comidas */}
      <RecommendationsM />
      { !isMealDone ? renderButton() : undefined }
    </div>
  );
}

export default DrinkDetails;

DrinkDetails.propTypes = {
  match: PropTypes.objectOf(PropTypes.string).isRequired,
};
