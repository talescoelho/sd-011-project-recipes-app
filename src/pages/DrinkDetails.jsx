import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import RecipeCard from '../components/RecipeCard';
import Recommendations from '../components/Recommendations';
import IngredientsList from '../components/IngredientsList';
import { APIDrinksById } from '../services/APImealsANDdrinks';
import '../css/footerMenu.css';

function DrinkDetails({ match: { params } }) {
  const [DrinkDataAPI, setDrinkDadaAPI] = useState({});

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
      <Recommendations />

      <button className="footer" type="button" data-testid="start-recipe-btn">
        Iniciar Receita
      </button>
    </div>
  );
}

export default DrinkDetails;

DrinkDetails.propTypes = {
  match: PropTypes.objectOf(PropTypes.string).isRequired,
};
