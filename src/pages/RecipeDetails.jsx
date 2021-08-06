import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import RecipeCard from '../components/MealRecipeCard';
import RecipeInfos from '../components/RecipeInfos';
import { APImealById } from '../services/APImealsANDdrinks';

// Falta implementar o await da promise;
function RecipeDetails({ match: { params } }) {
  const [FetchAPI, setFetchAPI] = useState([]);
  useEffect(() => {
    const { id } = params;
    const requestMeal = async () => {
      const response = await APImealById(id);
      setFetchAPI(response.meals[0]);
    };
    requestMeal();
  }, []);

  console.log(FetchAPI.idMeal);
  // Adicionar loading

  return (
    <div>
      <RecipeCard />
      <RecipeInfos />
      <div data-testid={ `${0}-recomendation-card` }>
        Comidas recomendadas-Usar componente dos card ja pronto
      </div>
      <button type="button" data-testid="start-recipe-btn">
        Iniciar Receita
      </button>
    </div>
  );
}

export default RecipeDetails;

// corrigir proptypes
RecipeDetails.propTypes = {
  match: PropTypes.objectOf(PropTypes.object).isRequired,
  // params: PropTypes.objectOf(PropTypes.object).isRequired,
  // id: PropTypes.string.isRequired,
};
