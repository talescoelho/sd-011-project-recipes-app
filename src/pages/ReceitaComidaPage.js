import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import ShareFavBtn from '../components/ShareFavBtn';
import { ingredientFoodHelper } from '../components/Helper';

export default function ReceitaComidaPage() {
  const [foodDetails, setFoodDetails] = useState();
  const [recomendations, setRecomendations] = useState();
  const [storageInPrgrss, setStorageIn] = useState();
  const location = useLocation();
  const FOOD_DETAILS_URL = 'https://www.themealdb.com/api/json/v1/1/lookup.php?i=';
  const RECOMENDATIONS_URL = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';

  useEffect(() => {
    const foodId = location.pathname.split('/')[2];
    fetch(FOOD_DETAILS_URL + foodId)
      .then((response) => response.json())
      .then((data) => setFoodDetails(data));
  }, []);

  function getInProgress() {
    const getInPrgssStorage = JSON.parse(localStorage.getItem('inProgressRecipes'));
    setStorageIn(getInPrgssStorage);
  }

  useEffect(() => {
    getInProgress();
    fetch(RECOMENDATIONS_URL)
      .then((response) => response.json())
      .then((data) => setRecomendations(data));
  }, []);

  function renderRecomendation() {
    const maxLength = 6;
    return (
      recomendations.drinks.map((recipe, index) => {
        if (index < maxLength) {
          return (
            <div
              key={ recipe.strDrink }
              data-testid={ `${index}-recomendation-card` }
            >
              <img
                src={ recipe.strDrinkThumb }
                alt={ recipe.strDrink }
                height="180px"
                width="180px"
                data-testid="recipe-photo"
              />
              <p className="legend">{ recipe.strDrink }</p>
            </div>
          );
        }
        return null;
      })
    );
  }

  const ingredientFilter = ingredientFoodHelper(foodDetails);

  function renderFoods() {
    return (
      <div>
        <p>{foodDetails ? foodDetails.idMeal : ''}</p>
        <img
          src={ foodDetails.meals[0].strMealThumb }
          alt="Foto"
          data-testid="recipe-photo"
        />
        <h1 data-testid="recipe-title">{ foodDetails.meals[0].strMeal }</h1>
        <ShareFavBtn type="comida" id={ foodDetails.meals[0].idMeal } />
        <h5 data-testid="recipe-category">{ foodDetails.meals[0].strCategory }</h5>

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
            { foodDetails.meals[0].strInstructions }
          </p>
        </div>
        <object
          src={ foodDetails.meals[0].strYoutube }
          data-testid="video"
          aria-label="meal-video"
          width="400"
          height="300"
        />
        <Link to={ `/comidas/${foodDetails.meals[0].idMeal}/in-progress` }>
          <button
            type="button"
            data-testid="start-recipe-btn"
            style={ { position: 'fixed', bottom: '0px' } }
          >
            {storageInPrgrss && storageInPrgrss.meals[foodDetails.meals[0].idMeal] ? (
              'Continuar Receita') : 'Iniciar Receita'}
          </button>
        </Link>
        <h3>Receitas recomendadas</h3>
        <div>
          { recomendations ? renderRecomendation() : <p>Loading...</p> }
        </div>
      </div>
    );
  }

  return (
    <div>
      { foodDetails ? renderFoods() : <p>Loading...</p> }
    </div>
  );
}

ReceitaComidaPage.propTypes = {
  match: PropTypes.shape({
    url: PropTypes.string.isRequired,
  }).isRequired,
};
