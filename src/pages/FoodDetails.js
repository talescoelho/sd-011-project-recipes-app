import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';
import useFetch from '../hooks/useFetch';
import shareIcon from '../images/shareIcon.svg';
import blackHeartIcon from '../images/blackHeartIcon.svg';
import whiteHeartIcon from '../images/whiteHeartIcon.svg';
import handleClickFavoriteRecipe from '../helpers/handleClickFavoriteRecipe';
import handleClickClipboard from '../helpers/handleClickClipBoard';
import RecomendationCard from '../components/RecomendationCard';
import handleContinueButton from '../helpers/handleContinueButton';
import '../styles/foodDetails.css';

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
  const urlVideo = strYoutube.replace('watch?v=', 'embed/');

  const entries = Object.entries(meal);
  const ingredients = entries.filter(([value]) => value
    .includes('strIngredient')).filter(([, value]) => value !== '' && value !== null);
  const ingredientsQuantity = entries.filter(([value]) => value
    .includes('strMeasure')).filter(([, value]) => value !== '' && value !== null);

  const doneRecipes = localStorage.getItem('doneRecipes');

  let buttonShoulBeVisible = true;
  if (doneRecipes) {
    const doneRecipesArray = JSON.parse(doneRecipes);
    buttonShoulBeVisible = !doneRecipesArray.some((recipe) => recipe.id.includes(id));
  }

  return (
    <div className="body-b d-flex f-d-column">
      <img
        className="top-img"
        src={ strMealThumb }
        alt={ `${strMeal}` }
        data-testid="recipe-photo"
      />
      <div className="d-flex a-i-center j-c-spBetween ml-1">
        <h1 data-testid="recipe-title">{ strMeal }</h1>
        <div className="d-flex">
          { messageClipboard ? <p>{messageClipboard}</p> : (
            <button
              type="button"
              onClick={ () => handleClickClipboard(setMessageClipboard) }
              className="btn-icon"
            >
              <img
                src={ shareIcon }
                alt=""
                data-testid="share-btn"
              />
            </button>
          )}

          <button
            type="button"
            onClick={ () => handleClickFavoriteRecipe(id, meal,
              setIsFavorite, isFavorite) }
            className="btn-icon"
          >
            { isFavorite ? (
              <img src={ blackHeartIcon } alt="" data-testid="favorite-btn" />)
              : (<img src={ whiteHeartIcon } alt="" data-testid="favorite-btn" />) }
          </button>
        </div>
      </div>
      <p data-testid="recipe-category" className="ml-1">{ `- ${strCategory}` }</p>
      <span className="fh-4 ml-1">
        Ingredients
      </span>
      <ul className="bg-gray m-1 b-shadow b-radius">
        { ingredients.map(([, value], index) => (
          <li
            key={ value }
            data-testid={ `${index}-ingredient-name-and-measure` }
          >
            { `${value} -${ingredientsQuantity[index][1]}` }
          </li>
        ))}
      </ul>
      <span className="fh-4 ml-1">Instructions</span>
      <p
        data-testid="instructions"
        className="bg-gray m-1 p-1 b-shadow b-radius"
      >
        { strInstructions }
      </p>
      <iframe data-testid="video" className="ml-1" src={ urlVideo } title="description" />
      <span className="fh-4 ml-1">Recommended</span>
      <RecomendationCard arrayOfRecomendations={ drinksData } />
      {
        buttonShoulBeVisible && (
          <Link to={ `/comidas/${id}/in-progress` }>
            <button
              className="start-btn btn btn-m"
              data-testid="start-recipe-btn"
              type="button"
            >
              { handleContinueButton(id, 'meals')
                ? 'Continuar Receita' : 'Iniciar Receita' }
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
