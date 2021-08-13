import React, { useState, useEffect, useContext } from 'react';
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
import RecommendedMeals from '../components/RecommendedMeals';
import DrinkIngredientsCheckbox from '../components/DrinkIngredientsCheckbox';
import GlobalContext from '../context';
import { handleSaveDrinkRecipeInLocalStorage } from '../helpers/finishButton';

function DrinkInProgress(props) {
  const { isIngridientUsed } = useContext(GlobalContext);
  const [dataToManipulate, setDataTomanipulate] = useState({});
  const [meals, setMeals] = useState([]);
  const [statusControl, setStatusControl] = useState({
    isVisible: true,
    isInProgress: false,
    isFavorited: false,
    isLinkCopied: false,
  });
  const { isVisible, isFavorited, isLinkCopied } = statusControl;
  const { strDrinkThumb, strDrink, strAlcoholic,
    strInstructions } = dataToManipulate;

  const isDisabled = Object.values(isIngridientUsed)
    .every((ingredient) => ingredient === true);

  // const urlLengthToGetId = 30;
  // const restOfUrl = 36;
  // const drinkId = window.location.href.slice(urlLengthToGetId, restOfUrl);

  const { match: { params: { id } } } = props;

  async function fetchMealAndDrinkDataFromAPI() {
    const drinkDetails = await fetchDrinkDetailsFromCocktailsDB(id);
    const recommendedMeals = await fetchRecommendedMealsFromMealsDB();
    setDataTomanipulate(...drinkDetails);
    setMeals(recommendedMeals);
  }

  function readLocalStorage() {
    const getDoneRecipes = JSON.parse(localStorage.getItem('doneRecipes'));
    const getInProgressRecipes = JSON.parse(localStorage.getItem('inProgressRecipes'));
    const getFavoriteRecipes = JSON.parse(localStorage.getItem('favoriteRecipes'));
    if (getDoneRecipes) {
      const isRecipeDone = getDoneRecipes.some((recipe) => recipe.id === id);
      setStatusControl({
        ...statusControl,
        isVisible: !isRecipeDone,
      });
    }
    if (getInProgressRecipes) {
      const isRecipeInProgress = Boolean(getInProgressRecipes.cocktails[id]);
      setStatusControl({
        ...statusControl,
        isInProgress: isRecipeInProgress,
      });
    }
    if (getFavoriteRecipes) {
      const isRecipeFavorited = getFavoriteRecipes
        .some((recipe) => recipe.id === id);
      setStatusControl({
        ...statusControl,
        isFavorited: isRecipeFavorited,
      });
    }
  }

  function handleFinishRecipeClick() {
    handleSaveDrinkRecipeInLocalStorage(dataToManipulate, id);
    const { history } = props;
    history.push('/receitas-feitas');
  }

  function handleShareButtonClick() {
    const recipeIdURL = window.location.pathname.match(/\d+/g)[0];
    copy(`http://localhost:3000/bebidas/${recipeIdURL}`);
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
    setFavoriteDrinkInLocalStorage(dataToManipulate);
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
        <img data-testid="recipe-photo" src={ strDrinkThumb } alt="" />
        <div className="recipe-title">
          <h1 className="title" data-testid="recipe-title">{strDrink}</h1>
          {iconsRender()}
          {isLinkCopied && <p>Link copiado!</p>}
        </div>
        <h3 data-testid="recipe-category">{strAlcoholic}</h3>
        <div>
          <h4>Ingredients</h4>
          <DrinkIngredientsCheckbox dataToManipulate={ dataToManipulate } />
        </div>
        <p data-testid="instructions">{strInstructions}</p>
        <h2>Recomendations</h2>
        <RecommendedMeals meals={ meals } />
        {isVisible && buttonRender()}
      </div>
    </section>
  );
}

DrinkInProgress.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func }).isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string }) }).isRequired,
};

export default withRouter(DrinkInProgress);
