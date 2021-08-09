import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
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
      />

      <IngredientsList meal={ MealDataAPI } />

      <p data-testid="instructions">
        <h2>Instructions</h2>
        {MealDataAPI.strInstructions}
      </p>

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

      <button className="footer" type="button" data-testid="start-recipe-btn">
        Iniciar Receita
      </button>
    </div>
  );
}

export default MealDetails;

MealDetails.propTypes = {
  match: PropTypes.objectOf(PropTypes.string).isRequired,
};
