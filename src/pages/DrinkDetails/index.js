import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';
import './styles.css';
import shareIcon from '../../images/shareIcon.svg';
import whiteHeartIcon from '../../images/whiteHeartIcon.svg';
import blackHeartIcon from '../../images/blackHeartIcon.svg';

const FoodDetails = ({ match }) => {
  const { id } = match.params;
  const { data, request } = useFetch();
  const { data: mealsData, request: requestMeals } = useFetch();
  const [messageClipboard, setMessageClipboard] = React.useState(null);
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
    request(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`);
  }, [request, id]);

  React.useEffect(() => {
    requestMeals('https://www.themealdb.com/api/json/v1/1/search.php?s=');
  }, [requestMeals]);

  if (!data || !mealsData) {
    return null;
  }

  const { drinks } = data;
  const drink = drinks[0];
  const { strDrinkThumb, strDrink, strAlcoholic, strInstructions } = drink;
  const entries = Object.entries(drink);
  const ingredients = entries.filter(([value]) => value
    .includes('strIngredient')).filter(([, value]) => value !== '' && value !== null);
  const { meals } = mealsData;
  const numberOfMeals = 6;
  const filteredMeals = meals.filter((value, index) => index < numberOfMeals);

  const doneRecipes = localStorage.getItem('doneRecipes');
  const recipesInProgress = localStorage.getItem('inProgressRecipes');
  let buttonShoulBeVisible = true;
  if (doneRecipes) {
    const doneRecipesArray = JSON.parse(doneRecipes);
    buttonShoulBeVisible = !doneRecipesArray.some((recipe) => recipe.id.includes(id));
  }

  let continueButton = false;
  if (recipesInProgress) {
    const recipesInProgressObj = JSON.parse(recipesInProgress).cocktails;
    if (recipesInProgressObj[id]) {
      continueButton = true;
    }
  }

  function handleClickClipboard() {
    const url = window.location.href;
    navigator.clipboard.writeText(url);
    const time = 3000;
    setMessageClipboard('Link copiado!');
    setTimeout(() => setMessageClipboard(null), time);
  }

  return (
    <div>
      <img
        className="top-img"
        src={ strDrinkThumb }
        alt={ `${strDrink}` }
        data-testid="recipe-photo"
      />
      <h1 data-testid="recipe-title">{ strDrink }</h1>
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
      {messageClipboard}
      <h2 data-testid="recipe-category">{ strAlcoholic }</h2>
      Ingredients
      <ul>
        { ingredients.map(([name, value], index) => {
          const quantity = drink[`strMeasure${name.split('strIngredient')[1]}`];
          if (quantity === null || quantity === '') {
            return (
              <li
                key={ value }
                data-testid={ `${index}-ingredient-name-and-measure` }
              >
                { value }
              </li>
            );
          }
          return (
            <li
              key={ value }
              data-testid={ `${index}-ingredient-name-and-measure` }
            >
              { `${value} -${drink[`strMeasure${name.split('strIngredient')[1]}`]}` }
            </li>
          );
        })}
      </ul>
      Instructions
      <p data-testid="instructions">{ strInstructions }</p>
      Recommended
      <div className="div-scroll">
        { filteredMeals.map((meal, index) => {
          const { strMealThumb, strCategory: mealCategory, strMeal } = meal;
          return (
            <div
              className="recomendation-card"
              key={ index }
              data-testid={ `${index}-recomendation-card` }
            >
              <img className="img-card" src={ strMealThumb } alt={ strMeal } />
              <p>{ mealCategory }</p>
              <h3 data-testid={ `${index}-recomendation-title` }>{ strMeal }</h3>
            </div>
          );
        }) }
      </div>
      {
        buttonShoulBeVisible && (
          <Link to={ `/bebidas/${id}/in-progress` }>
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
