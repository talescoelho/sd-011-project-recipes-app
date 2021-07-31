import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';
import shareIcon from '../../images/shareIcon.svg';
import whiteHeartIcon from '../../images/whiteHeartIcon.svg';
import blackHeartIcon from '../../images/blackHeartIcon.svg';

const FoodDetails = ({ match }) => {
  const { id } = match.params;
  const { data, request } = useFetch();
  const [messageClipboard, setMessageClipboard] = React.useState(null);
  const { data: drinksData, request: requestDrinks } = useFetch();
  const [isFavorite, setIsFavorite] = React.useState(false);

  React.useEffect(() => {
    const favoriteRecipes = localStorage.getItem('favoriteRecipes');
    if (favoriteRecipes) {
      const favoriteRecipesArray = JSON.parse(favoriteRecipes);
      if (favoriteRecipesArray.some((recipe) => recipe.id === id)) {
        setIsFavorite(true);
      }
    }
  }, [id]);

  React.useEffect(() => {
    request(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
  }, [request, id]);

  React.useEffect(() => {
    requestDrinks('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=');
  }, [requestDrinks]);

  if (!data || !drinksData) {
    return null;
  }

  const { meals } = data;
  const meal = meals[0];
  const { strMealThumb, strYoutube, strMeal, strCategory, strInstructions } = meal;

  const entries = Object.entries(meal);
  const ingredients = entries.filter(([value]) => value
    .includes('strIngredient')).filter(([, value]) => value !== '' && value !== null);
  const ingredientsQuantity = entries.filter(([value]) => value
    .includes('strMeasure')).filter(([, value]) => value !== '' && value !== null);

  const { drinks } = drinksData;
  const numberOfDrinks = 6;
  const filteredDrinks = drinks.filter((value, index) => index < numberOfDrinks);

  const doneRecipes = localStorage.getItem('doneRecipes');
  const recipesInProgress = localStorage.getItem('inProgressRecipes');
  let buttonShoulBeVisible = true;
  if (doneRecipes) {
    const doneRecipesArray = JSON.parse(doneRecipes);
    buttonShoulBeVisible = !doneRecipesArray.some((recipe) => recipe.id.includes(id));
  }

  let continueButton = false;
  if (recipesInProgress) {
    const recipesInProgressObj = JSON.parse(recipesInProgress).meals;
    if (recipesInProgressObj[id]) {
      continueButton = true;
    }
  }

  function handleClickClipboard() {
    const url = window.location.href;
    navigator.clipboard.writeText(url);
    const time = 2000;
    setMessageClipboard('Link copiado!');
    setTimeout(() => setMessageClipboard(null), time);
  }

  return (
    <div>
      <img
        className="top-img"
        src={ strMealThumb }
        alt={ `${strMeal}` }
        data-testid="recipe-photo"
      />
      <h1 data-testid="recipe-title">{ strMeal }</h1>
      { messageClipboard }
      <button type="button" onClick={ handleClickClipboard }>
        <img
          src={ shareIcon }
          alt=""
          data-testid="share-btn"
        />
      </button>
      { isFavorite ? (
        <img src={ blackHeartIcon } alt="" data-testid="favorite-btn" />)
        : (<img src={ whiteHeartIcon } alt="" data-testid="favorite-btn" />) }
      <h2 data-testid="recipe-category">{ strCategory }</h2>
      Ingredients
      <ul>
        { ingredients.map(([, value], index) => (
          <li
            key={ value }
            data-testid={ `${index}-ingredient-name-and-measure` }
          >
            { `${value} -${ingredientsQuantity[index][1]}` }
          </li>
        ))}
      </ul>
      Instructions
      <p data-testid="instructions">{ strInstructions }</p>
      <iframe data-testid="video" src={ strYoutube } title="description" />
      Recommended
      <div className="div-scroll">
        { filteredDrinks.map((drink, index) => {
          const { strDrinkThumb, strCategory: strAlcoholic, strDrink } = drink;
          return (
            <div
              className="recomendation-card"
              key={ index }
              data-testid={ `${index}-recomendation-card` }
            >
              <img className="img-card" src={ strDrinkThumb } alt={ strDrink } />
              <p>{ strAlcoholic }</p>
              <h3 data-testid={ `${index}-recomendation-title` }>{ strDrink }</h3>
            </div>
          );
        }) }
      </div>
      {
        buttonShoulBeVisible && (
          <Link to={ `/comidas/${id}/in-progress` }>
            <button
              className="start-btn"
              data-testid="start-recipe-btn"
              type="button"
            >
              { continueButton ? 'Continuar Receita' : 'Iniciar Receita' }
            </button>
          </Link>)
      }
    </div>
  );
};

FoodDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default FoodDetails;
