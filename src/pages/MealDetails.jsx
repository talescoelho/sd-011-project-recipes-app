import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import RecipeCard from '../components/RecipeCard';
import IngredientsList from '../components/IngredientsList';
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
      <IngredientsList meal={ MealDataAPI } />
      <p data-testid="instructions">
        {MealDataAPI.strInstructions}
      </p>

      <div data-testid={ `${0}-recomendation-card` }>
        <h2>Recomendações</h2>
        Comidas recomendadas-Usar componente dos card ja pronto
      </div>
      <button type="button" data-testid="start-recipe-btn">
        Iniciar Receita
        {/* no click desse botão muda a url e envia apra o receitas em prograsso que ira usar o card da receita e no lugar de ingredientes irá colocar os checkbox. */}
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
