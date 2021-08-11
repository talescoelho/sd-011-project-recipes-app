import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import ShareFavBtn from '../components/ShareFavBtn';

export default function ReceitaBebidaPage(props) {
  const [drinkDetails, setDrinkDetails] = useState();
  const [recomendations, setRecomendations] = useState();
  const location = useLocation();
  const DRINK_DETAILS_URL = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=';
  const RECOMENDATIONS_URL = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';

  useEffect(() => {
    const foodId = location.pathname.split('/')[2];
    fetch(DRINK_DETAILS_URL + foodId)
      .then((response) => response.json())
      .then((data) => setDrinkDetails(data));
  }, []);

  const ingMax = 15;
  const ingredientsKeys = drinkDetails && (
    Object.keys(drinkDetails.drinks[0]).filter((key) => key.includes('ngredient')));
  const measureKeys = drinkDetails && (
    Object.keys(drinkDetails.drinks[0]).filter((key) => key.includes('easure')));
  const ingredientMap = ingredientsKeys && ingredientsKeys
    .filter((value) => drinkDetails.drinks[0][value])
    .map((ing, i) => (
      `- ${drinkDetails.drinks[0][ing]} - ${drinkDetails.drinks[0][measureKeys[i]]}`
    )).slice(0, ingMax);
  const ingredientFilter = ingredientMap && ingredientMap
    .filter((value) => value !== 'null-null' && value !== '-');

  useEffect(() => {
    fetch(RECOMENDATIONS_URL)
      .then((response) => response.json())
      .then((data) => setRecomendations(data));
  }, []);

  function renderRecomendation() {
    const maxLength = 6;
    return (
      recomendations.meals.map((recipe, index) => {
        if (index < maxLength) {
          return (
            <div
              key={ recipe.strMeal }
              data-testid={ `${index}-recomendation-card` }
            >
              <img
                src={ recipe.strMealThumb }
                alt={ recipe.strMeal }
                height="100px"
                width="100px"
                data-testid="recipe-photo"
              />
              <h5>{ recipe.strMeal }</h5>
            </div>
          );
        }
        return null;
      })
    );
  }

  function renderDrinks() {
    return (
      <div>
        <p>{ drinkDetails.idDrink }</p>
        <img
          src={ drinkDetails.drinks[0].strDrinkThumb }
          alt="foto"
          data-testid="recipe-photo"
        />
        <h1 data-testid="recipe-title">{ drinkDetails.drinks[0].strDrink }</h1>
        <ShareFavBtn url={ props.match.url } />
        <h5 data-testid="recipe-category">{ drinkDetails.drinks[0].strCategory }</h5>
        <p data-testid="recipe-category">{ drinkDetails.drinks[0].strAlcoholic }</p>

        <div>
          <h3>Ingredients</h3>
          <ul>
            { ingredientFilter ? ingredientFilter.map((item, index) => (
              <p
                key={ index }
                data-testid={ `${index}-ingredient-name-and-measure` }
              >
                { item }
              </p>)) : '' }
          </ul>
        </div>
        <div>
          <h3>Instructions</h3>
          <p data-testid="instructions">
            { drinkDetails.drinks[0].strInstructions }
          </p>
        </div>
        <div>
          <h3>Receitas recomendadas</h3>
          <ul>
            { recomendations ? renderRecomendation() : <p>Loading...</p> }
          </ul>
        </div>
        <Button data-testid="start-recipe-btn">Iniciar Receita</Button>
      </div>
    );
  }
  return (
    <div>
      { drinkDetails ? renderDrinks() : <p>Loading...</p> }
    </div>
  );
}

ReceitaBebidaPage.propTypes = {
  match: PropTypes.shape({
    url: PropTypes.string.isRequired,
  }).isRequired,
};
