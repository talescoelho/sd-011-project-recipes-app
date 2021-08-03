import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import copy from 'clipboard-copy';
import styles from './FoodDetails.module.css';
import shareIcon from '../../images/shareIcon.svg';
import whiteHeart from '../../images/whiteHeartIcon.svg';
import blackHeart from '../../images/blackHeartIcon.svg';

function FoodDetails({ match }) {
  const [meals, setMeals] = useState({});
  const [favorite, setFavorite] = useState(false);
  const [copied, setCopied] = useState(false);
  const [drinkRecomendation, setRecomendation] = useState([]);
  const { id } = match.params;

  const doneRecipes = JSON.parse(localStorage.getItem('doneRecipes'));
  const isDone = doneRecipes && doneRecipes.some((item) => item.id === id);

  const inProgressRecipes = JSON.parse(localStorage.getItem('inProgressRecipes'));
  const inProgress = inProgressRecipes && inProgressRecipes.meals[id];

  const mN = 6;
  React.useEffect(() => {
    const fetchMeal = () => {
      fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
        .then((response) => response.json())
        .then((data) => setMeals(data.meals[0]));
      fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=')
        .then((response) => response.json())
        .then((data) => setRecomendation(data.drinks.filter((_, index) => index < mN)));
    };
    fetchMeal();
    const favoriteRecipes = JSON.parse(localStorage.getItem('favoriteRecipes'));
    const favorites = favoriteRecipes && favoriteRecipes.some((item) => item.id === id);
    if (favorites) {
      setFavorite(true);
    }
  }, [id]);

  if (Object.keys(meals).length === 0) {
    return (<h1>Carregando...</h1>);
  }
  const videoId = meals.strYoutube.split('=')[1];
  const ingredients = Object.keys(meals)
    .filter((item) => item.includes('Ingredient'))
    .filter((item) => meals[item]).map((item) => meals[item]);

  const measures = Object.keys(meals)
    .filter((item) => item.includes('Measure'))
    .filter((item) => meals[item]).map((item) => meals[item]);

  const shareButtonHandle = () => {
    setCopied(true);
    const mSeconds = 2000;
    copy(window.location.href);
    setTimeout(() => {
      setCopied(false);
    }, mSeconds);
  };

  return (
    <div>

      <img
        src={ meals.strMealThumb }
        alt="recipe"
        style={ { width: '200px' } }
        data-testid="recipe-photo"
      />
      <h1
        data-testid="recipe-title"
      >
        { meals.strMeal }
      </h1>

      <p
        data-testid="recipe-category"
      >
        { meals.strCategory }
      </p>
      <button
        data-testid="share-btn"
        type="button"
        onClick={ shareButtonHandle }
      >
        <img src={ shareIcon } alt="share" />
      </button>
      <button
        type="button"
        onClick={ () => setFavorite(!favorite) }
      >
        <img
          src={ !favorite ? whiteHeart : blackHeart }
          alt="share"
          data-testid="favorite-btn"
        />
      </button>
      <p>{copied ? 'Link copiado!' : null}</p>
      <h1>Instruções</h1>
      <p
        data-testid="instructions"
      >
        { meals.strInstructions }
      </p>
      <h1>Ingredientes</h1>
      {ingredients.map((item, index) => (
        <p
          data-testid={ `${index}-ingredient-name-and-measure` }
          key={ item }
        >
          {item}
          &nbsp; - &nbsp;
          { measures[index] }
        </p>
      ))}
      <h1>Video</h1>
      <iframe
        title={ meals.strMeal }
        src={ `https://www.youtube.com/embed/${videoId}` }
        data-testid="video"
      />
      <div
        className={ styles.carousel }
      >
        {drinkRecomendation && drinkRecomendation.map((item, index) => (
          <div
            key={ index }
            data-testid={ `${index}-recomendation-card` }
            className={ styles.carouselItemDiv }
          >
            <img
              src={ item.strDrinkThumb }
              alt="recipe"
              className={ styles.carouselImg }
            />
            <p>{ item.strAlcoholic }</p>
            <h5
              data-testid={ `${index}-recomendation-title` }
            >
              { item.strDrink }
            </h5>
          </div>
        ))}
      </div>
      {!isDone && (
        <Link
          to={ `/comidas/${id}/in-progress` }
        >
          <button
            data-testid="start-recipe-btn"
            type="button"
            className={ styles.startRecipeBttn }
          >
            {inProgress ? 'Continuar Receita' : 'Iniciar Receita' }
          </button>
        </Link>
      )}

    </div>
  );
}

FoodDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  }).isRequired,
};

export default FoodDetails;
