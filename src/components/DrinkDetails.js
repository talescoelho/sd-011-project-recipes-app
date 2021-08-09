import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import copy from 'clipboard-copy';
import { fetchDrinkDetailsFromCocktailsDB,
  fetchRecommendedMealsFromMealsDB } from '../services';
import { setFavoriteDrinkInLocalStorage } from '../helpers';
import shareIcon from '../images/shareIcon.svg';
import whiteHeartIcon from '../images/whiteHeartIcon.svg';
import blackHeatIcon from '../images/blackHeartIcon.svg';
import '../styles/Details.css';
import MapIngredients from './MapIngredients';
import RecommendedMeals from './RecommendedMeals';

function DrinkDetails(props) {
  const [dataTomanipulate, setDataTomanipulate] = useState([]);
  const [meals, setMeals] = useState([]);
  const [statusControl, setStatusControl] = useState({
    isVisible: true,
    isInProgress: false,
    isFavorited: false,
    isLinkCopied: false,
  });
  const { isVisible, isInProgress, isFavorited, isLinkCopied } = statusControl;
  const { strDrinkThumb, strDrink, strAlcoholic,
    strInstructions } = dataTomanipulate;

  const urlLengthToGetId = 30;
  const drinksId = window.location.href.slice(urlLengthToGetId);

  async function fetchMealAndDrinkDataFromAPI() {
    const drinkDetails = await fetchDrinkDetailsFromCocktailsDB(drinksId);
    const recommendedMeals = await fetchRecommendedMealsFromMealsDB();
    setDataTomanipulate(...drinkDetails);
    setMeals(recommendedMeals);
    console.log(recommendedMeals);
  }

  function readLocalStorage() {
    const getDoneRecipes = JSON.parse(localStorage.getItem('doneRecipes'));
    const getInProgressRecipes = JSON.parse(localStorage.getItem('inProgressRecipes'));
    const getFavoriteRecipes = JSON.parse(localStorage.getItem('favoriteRecipes'));
    if (getDoneRecipes) {
      const isRecipeDone = getDoneRecipes.some((recipe) => recipe.id === drinksId);
      setStatusControl({
        ...statusControl,
        isVisible: !isRecipeDone,
      });
    }
    if (getInProgressRecipes) {
      const isRecipeInProgress = Boolean(getInProgressRecipes.cocktails[drinksId]);
      setStatusControl({
        ...statusControl,
        isInProgress: isRecipeInProgress,
      });
    }
    if (getFavoriteRecipes) {
      const isRecipeFavorited = getFavoriteRecipes
        .some((recipe) => recipe.id === drinksId);
      setStatusControl({
        ...statusControl,
        isFavorited: isRecipeFavorited,
      });
    }
  }

  function handleStartRecipeButtonClick() {
    const { history } = props;
    history.push(`/bebidas/${drinksId}/in-progress`);
  }

  function handleShareButtonClick() {
    copy(window.location.href);
    setStatusControl({
      ...statusControl,
      isLinkCopied: true,
    });
  }

  function handleLikeButtonClick() {
    setStatusControl({
      ...statusControl,
      isFavorited: !isFavorited,
    });
    setFavoriteDrinkInLocalStorage(dataTomanipulate);
  }

  const iconsRender = () => (
    <div className="icon-buttons">
      <button
        data-testid="share-btn"
        onClick={ handleShareButtonClick }
        type="button"
        aria-label="share-icon"
      >
        <img src={ shareIcon } alt="share-icon" />
      </button>
      <button
        data-testid="favorite-btn"
        type="button"
        aria-label="favorite-icon"
        onClick={ handleLikeButtonClick }
        src={ isFavorited ? blackHeatIcon : whiteHeartIcon }
      >
        {isFavorited ? <img src={ blackHeatIcon } alt="favorited-icon" />
          : <img src={ whiteHeartIcon } alt="favorite-icon" />}
      </button>
    </div>
  );

  const buttonRender = () => (
    <button
      className="start-button"
      data-testid="start-recipe-btn"
      onClick={ handleStartRecipeButtonClick }
      type="button"
    >
      {isInProgress ? 'Continuar Receita' : 'Iniciar Receita'}
    </button>
  );

  useEffect(() => {
    fetchMealAndDrinkDataFromAPI();
    readLocalStorage();
  }, []);

  return (
    <section>
      <div>
        <img data-testid="recipe-photo" src={ strDrinkThumb } alt="" />
        <div className="recipe-title">
          <h1 className="title" data-testid="recipe-title">{strDrink}</h1>
          {iconsRender()}
          {isLinkCopied && <p>Link copiado!</p>}
        </div>
        <h3 data-testid="recipe-category">{strAlcoholic}</h3>
        <div>
          <h4>Ingredients</h4>
          <MapIngredients dataTomanipulate={ dataTomanipulate } />
        </div>
        <p data-testid="instructions">{strInstructions}</p>
        <h2>Recomendations</h2>
        <RecommendedMeals meals={ meals } />
        {isVisible && buttonRender()}
      </div>
    </section>
  );
}

DrinkDetails.propTypes = {
  history: PropTypes.instanceOf(PropTypes.array).isRequired,
};

export default withRouter(DrinkDetails);
