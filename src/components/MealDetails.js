import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import copy from 'clipboard-copy';
import { fetchMealDetailsFromMealsDB,
  fetchRecommendedBeveragesFromCocktailsDB } from '../services';
import { setFavoriteMealInLocalStorage } from '../helpers';
import shareIcon from '../images/shareIcon.svg';
import whiteHeartIcon from '../images/whiteHeartIcon.svg';
import blackHeatIcon from '../images/blackHeartIcon.svg';
import '../styles/Details.css';
import RecommendedBeverages from './RecommendedBeverages';
import MapIngredients from './MapIngredients';

function MealDetails(props) {
  const [dataTomanipulate, setDataTomanipulate] = useState([]);
  const [beverages, setBeverages] = useState([]);
  const [statusControl, setStatusControl] = useState({
    isVisible: true,
    isInProgress: false,
    isFavorited: false,
    isLinkCopied: false,
  });
  const { isVisible, isInProgress, isFavorited, isLinkCopied } = statusControl;
  const { strYoutube, strMealThumb, strMeal, strCategory,
    strInstructions } = dataTomanipulate;

  const urlLengthToGetId = 30;
  const mealsId = window.location.href.slice(urlLengthToGetId);
  const videoURL = strYoutube ? strYoutube
    .split('https://www.youtube.com/watch?v=')[1] : '';

  async function fetchMealAndDrinkDataFromAPI() {
    const mealsDetails = await fetchMealDetailsFromMealsDB(mealsId);
    const recommendedDrinks = await fetchRecommendedBeveragesFromCocktailsDB();
    setDataTomanipulate(...mealsDetails);
    setBeverages(recommendedDrinks);
  }

  function readLocalStorage() {
    const getDoneRecipes = JSON.parse(localStorage.getItem('doneRecipes'));
    const getInProgressRecipes = JSON.parse(localStorage.getItem('inProgressRecipes'));
    const getFavoriteRecipes = JSON.parse(localStorage.getItem('favoriteRecipes'));
    if (getDoneRecipes) {
      const isRecipeDone = getDoneRecipes.some((recipe) => recipe.id === mealsId);
      setStatusControl({
        ...statusControl,
        isVisible: !isRecipeDone,
      });
    }
    if (getInProgressRecipes) {
      const isRecipeInProgress = Boolean(getInProgressRecipes.meals[mealsId]);
      setStatusControl({
        ...statusControl,
        isInProgress: isRecipeInProgress,
      });
    }
    if (getFavoriteRecipes) {
      const isRecipeFavorited = getFavoriteRecipes
        .some((recipe) => recipe.id === mealsId);
      setStatusControl({
        ...statusControl,
        isFavorited: isRecipeFavorited,
      });
    }
  }

  function handleStartRecipeButtonClick() {
    const { history } = props;
    history.push(`/comidas/${mealsId}/in-progress`);
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
    setFavoriteMealInLocalStorage(dataTomanipulate);
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
      {isInProgress ? 'Continuar Receita' : 'Inicar Receita'}
    </button>
  );

  useEffect(() => {
    fetchMealAndDrinkDataFromAPI();
    readLocalStorage();
  }, []);

  return (
    <section>
      <div>
        <img data-testid="recipe-photo" src={ strMealThumb } alt="" />
        <div className="recipe-title">
          <h1 className="title" data-testid="recipe-title">{strMeal}</h1>
          {iconsRender()}
          {isLinkCopied && <p>Link copiado!</p>}
        </div>
        <h3 data-testid="recipe-category">{strCategory}</h3>
        <div>
          <h4>Ingredients</h4>
          <MapIngredients dataTomanipulate={ dataTomanipulate } />
        </div>
        <p data-testid="instructions">{strInstructions}</p>
        <div>
          <h2>Video</h2>
          <iframe
            src={ `https://www.youtube.com/embed/${videoURL}` }
            title="video"
            frameBorder="0"
            data-testid="video"
          />
        </div>
        <h2>Recomendations</h2>
        <RecommendedBeverages beverages={ beverages } />
        {isVisible && buttonRender()}
      </div>
    </section>
  );
}

MealDetails.propTypes = {
  history: PropTypes.instanceOf(PropTypes.array).isRequired,
};

export default withRouter(MealDetails);
