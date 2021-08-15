import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import RecipeCard from '../components/RecipeCard';
import Recommendations from '../components/Recommendations';
import IngredientsList from '../components/IngredientsList';
import { APImealById } from '../services/APImealsANDdrinks';
import '../css/footerMenu.css';

// Falta implementar o await da promise;
// corrigir rota e colocar o barra que está faltando. Ver se é encessario
// Adicionar loading

function MealDetails({ match: { params } }) {
  const [MealDataAPI, setMealDadaAPI] = useState({});
  // const [isMealDone, setIsMealsDone] = useState(false);
  const [isMealStarted, setIsMealStarted] = useState(false);
  const objectRecipe = {
    id: MealDataAPI.idMeal,
    type: 'comida',
    area: MealDataAPI.strArea,
    category: MealDataAPI.strCategory,
    alcoholicOrNot: '',
    name: MealDataAPI.strMeal,
    image: MealDataAPI.strMealThumb,
  };
  function verifyRecipeProgress(id) {
    const inProgressRecipes = JSON.parse(
      localStorage.getItem('inProgressRecipes'),
    );
    if (inProgressRecipes !== null) {
      const isInProgress = Object.hasOwnProperty.call(
        inProgressRecipes.meals,
        id,
      );
      setIsMealStarted(isInProgress);
    }
  }
  // function verifyRecipeDone(id) {
  //   const doneRecipes = JSON.parse(localStorage.getItem('doneRecipes'));
  //   if (doneRecipes !== null) {
  //     const filter = doneRecipes.filter((recipe) => recipe.id === id);
  //     if (filter.length >= 1) {
  //       setIsMealsDone(true);
  //     }
  //   }
  // }
  // function renderButton(comand) {
  //   return (
  //     <button className="footer" type="button" data-testid="start-recipe-btn">
  //       { `${comand} Receita` }
  //     </button>
  //   );
  // }

  useEffect(() => {
    const { id } = params;
    const requestMeal = async () => {
      const response = await APImealById(id);
      setMealDadaAPI(response.meals[0]);
    };
    // verifyRecipeDone(id);
    verifyRecipeProgress(id);
    requestMeal();
  }, [params]);

  return (
    <div>
      <RecipeCard data={ objectRecipe } />

      <IngredientsList recipe={ MealDataAPI } />

      <div data-testid="instructions">
        <h2>Instructions</h2>
        {MealDataAPI.strInstructions}
      </div>

      {(MealDataAPI.strYoutube) ? (
        <div className="embed-responsive embed-responsive-16by9">
          <h2>Video</h2>
          <iframe
            src={ MealDataAPI.strYoutube.replace('watch?v=', 'embed/') }
            data-testid="video"
            title="recipe Video"
            className="embed-responsive-item"
            allowFullScreen
          />

        </div>
      ) : <h2>Loading</h2>}
      <Recommendations />
      { (isMealStarted) ? (
        <button className="footer" type="button" data-testid="start-recipe-btn">
          Continuar Receita
        </button>
      ) : (
        <Link
          to={ `/comidas/${MealDataAPI.idMeal}/in-progress` }
          className="footer"
          data-testid="start-recipe-btn"
        >
          Iniciar Receita
        </Link>
      )}

    </div>
  );
}

export default MealDetails;

MealDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape(),
  }).isRequired,
};
