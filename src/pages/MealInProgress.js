import React, { useState, useEffect, useContext } from 'react';
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
import RecommendedBeverages from '../components/RecommendedBeverages';
import IngredientsCheckbox from '../components/IngredientsCheckbox';
import GlobalContext from '../context';
import { handleSaveMealRecipeInLocalStorage } from '../helpers/finishButton';

function MealInProgress(props) {
  const { isIngridientUsed } = useContext(GlobalContext);
  const [dataToManipulate, setDataTomanipulate] = useState({});
  const [beverages, setBeverages] = useState([]);
  const [statusControl, setStatusControl] = useState({
    isVisible: true,
    isInProgress: false,
    isFavorited: false,
    isLinkCopied: false,
  });
  const { isVisible, isFavorited, isLinkCopied } = statusControl;
  const { strYoutube, strMealThumb, strMeal, strCategory,
    strInstructions } = dataToManipulate;

  const isDisabled = Object.values(isIngridientUsed)
    .every((ingredient) => ingredient === true);

  const urlLengthToGetId = 30;
  const restOfUrl = 35;
  const mealsId = window.location.href.slice(urlLengthToGetId, restOfUrl);
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

  function handleFinishRecipeClick() {
    handleSaveMealRecipeInLocalStorage(dataToManipulate, mealsId);
    const { history } = props;
    history.push('/receitas-feitas');
  }

  function handleShareButtonClick() {
    const recipeURLLength = 35;
    copy(window.location.href.slice(0, recipeURLLength));
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
    setFavoriteMealInLocalStorage(dataToManipulate);
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
      data-testid="finish-recipe-btn"
      disabled={ !isDisabled }
      onClick={ handleFinishRecipeClick }
      type="button"
    >
      Finalizar Receita
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
          <IngredientsCheckbox dataToManipulate={ dataToManipulate } />
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

MealInProgress.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func }).isRequired,
};

export default withRouter(MealInProgress);
