import PropTypes from 'prop-types';
import React, { useState } from 'react';
import copy from 'clipboard-copy';
import { Link } from 'react-router-dom';
import styles from './DrinkDetails.module.css';
import shareIcon from '../../images/shareIcon.svg';
import whiteHeart from '../../images/whiteHeartIcon.svg';
import blackHeart from '../../images/blackHeartIcon.svg';

function DrinkDetails({ match }) {
  const [drinks, setDrinks] = useState({});
  const [favorite, setFavorite] = useState(false);
  const [copied, setCopied] = useState(false);
  const [foodRecomendation, setRecomendation] = useState([]);
  const { id } = match.params;
  const mN = 6;

  const doneRecipes = JSON.parse(localStorage.getItem('doneRecipes'));
  const isDone = doneRecipes && doneRecipes.some((item) => item.id === id);

  const inProgressRecipes = JSON.parse(localStorage.getItem('inProgressRecipes'));
  const inProgress = inProgressRecipes && inProgressRecipes.cocktails[id];

  React.useEffect(() => {
    const fetchDrink = () => {
      fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`)
        .then((response) => response.json())
        .then((data) => setDrinks(data.drinks[0]));
      fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=')
        .then((response) => response.json())
        .then((data) => setRecomendation(data.meals.filter((_, index) => index < mN)));
    };
    fetchDrink();
    const favoriteRecipes = JSON.parse(localStorage.getItem('favoriteRecipes'));
    console.log(favoriteRecipes);
    const favorites = favoriteRecipes && favoriteRecipes.some((item) => item.id === id);
    if (favorites) {
      setFavorite(true);
    }
  }, [id]);

  if (Object.keys(drinks).length === 0) {
    return (<h1>Carregando...</h1>);
  }
  const ingredients = Object.keys(drinks)
    .filter((item) => item.includes('Ingredient'))
    .filter((item) => drinks[item]).map((item) => drinks[item]);

  const measures = Object.keys(drinks)
    .filter((item) => item.includes('Measure'))
    .filter((item) => drinks[item]).map((item) => drinks[item]);

  const shareButtonHandle = () => {
    setCopied(true);
    const mSeconds = 2000;
    copy(window.location.href);
    setTimeout(() => {
      setCopied(false);
    }, mSeconds);
  };

  const favoriteBttnHandle = () => {
    setFavorite(!favorite);

    const favoriteObj = {
      id,
      type: 'bebida',
      area: drinks.strArea ? drinks.strArea : '',
      category: drinks.strCategory,
      alcoholicOrNot: drinks.strAlcoholic,
      name: drinks.strDrink,
      image: drinks.strDrinkThumb,
    };

    if (!favorite) {
      localStorage.setItem('favoriteRecipes', JSON.stringify([favoriteObj]));
    }
  };

  return (
    <div>

      <img
        src={ drinks.strDrinkThumb }
        alt="recipe"
        style={ { width: '200px' } }
        data-testid="recipe-photo"
      />
      <h1
        data-testid="recipe-title"
      >
        { drinks.strDrink }
      </h1>

      <p
        data-testid="recipe-category"
      >
        { drinks.strCategory }
        &nbsp; - &nbsp;
        { drinks.strAlcoholic }
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
        onClick={ favoriteBttnHandle }
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
        { drinks.strInstructions }
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
      <h1>Recomendação</h1>
      <div
        className={ styles.carousel }
      >
        {foodRecomendation && foodRecomendation.map((item, index) => (
          <div
            key={ index }
            data-testid={ `${index}-recomendation-card` }
            className={ styles.carouselItemDiv }
          >
            <img
              src={ item.strMealThumb }
              alt="recipe"
              className={ styles.carouselImg }
            />
            <p>{ item.strCategory }</p>
            <h5
              data-testid={ `${index}-recomendation-title` }
            >
              { item.strMeal }
            </h5>
          </div>
        ))}
      </div>
      {!isDone && (
        <Link
          to={ `/bebidas/${id}/in-progress` }
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

DrinkDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  }).isRequired,
};

export default DrinkDetails;
