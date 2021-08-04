import React from 'react';
import { Link } from 'react-router-dom';
import RecomendationRecipesCards from './RecomendationRecipesCards';
import FavoriteButton from './FavoriteButton';
import shareIcon from '../images/shareIcon.svg';

function RenderDrinkDetails({ data, pathname }) {
  function drinkRender() {
    if (data) {
      return (
        <div className="supply-card">
          <img
            data-testid="recipe-photo"
            src={ data[0].strDrinkThumb }
            alt={ data[0].strDrink }
          />
          <h1 data-testid="recipe-title">{ data[0].strDrink }</h1>
          <button
            onClick={ () => copy(pathname) }
            type="button"
            data-testid="share-btn"
          >
            <img src={ shareIcon } alt="shareIcon" />
          </button>
          <FavoriteButton />
          <h3 data-testid="recipe-category">
            {data[0].strCategory}
          </h3>
          <h2>Ingredientes</h2>
          <ul>
            {ingredients.map((ingredientDrink, index) => (
              <li key={ index } data-testid={ `${index}-ingredient-name-and-measure` }>
                {ingredientDrink}
                {' '}
                <strong>{measures[index]}</strong>
              </li>
            ))}
          </ul>
          <h2>Intruções</h2>
          <p data-testid="instructions">
            {data[0].strInstructions}
          </p>
          <h2>Recomendações</h2>
          <div>
            <RecomendationRecipesCards identifier="bebidas" />
          </div>
          <Link to={ `${pathname}/in-progress` }>
            <button
              className="start-recipe"
              type="button"
              data-testid="start-recipe-btn"
            >
              Continuar Receita
            </button>
          </Link>
        </div>
      );
    }
  }

  return (
    <div>
      {data && drinkRender()}
    </div>
  );
}

export default RenderDrinkDetails;
