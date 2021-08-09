import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import RecipeCard from '../components/RecipeCard';
import RecipeInfos from '../components/RecipeInfos';
import { APImealById } from '../services/APImealsANDdrinks';

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
  }, []);

  return (
    <div>
      <RecipeCard
        title={ MealDataAPI.strMeal }
        img={ MealDataAPI.strMealThumb }
        category={ MealDataAPI.strCategory }
        id={ MealDataAPI.idMeal }
      />
      <RecipeInfos meal={ MealDataAPI } />

      <div data-testid={ `${0}-recomendation-card` }>
        Comidas recomendadas-Usar componente dos card ja pronto
      </div>
      <button type="button" data-testid="start-recipe-btn">
        Iniciar Receita
      </button>
    </div>
  );
}

export default MealDetails;

// corrigir proptypes
MealDetails.propTypes = {
  match: PropTypes.objectOf(PropTypes.object).isRequired,
  // params: PropTypes.objectOf(PropTypes.object).isRequired,
  // id: PropTypes.string.isRequired,
};
