import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import ReactPlayer from 'react-player';

import { searchById } from '../services/RequestFood';

function DetailsFood(props) {
  const { match: { params: { id } } } = props;
  const [initialItemApi, setInitialItemApi] = useState([]);

  async function getDetailsById() {
    const itemsFood = await searchById(id);
    setInitialItemApi(itemsFood);
  }

  useEffect(() => {
    getDetailsById();
  }, []);

  function renderIngrediente(food) {
    const array = [];
    const limitItens = 15;
    for (let numero = 1; numero <= limitItens; numero += 1) {
      if (food[`strIngredient${numero}`] !== null
        && food[`strIngredient${numero}`] !== '') {
        array.push(
          <li
            data-testid={ `${numero - 1}-ingredient-name-and-measure` }
          >
            { `${food[`strIngredient${numero}`]} ` }
            { (food[`strMeasure${numero}`] !== null
              && food[`strMeasure${numero}`] !== '')
              ? <span>{ `${food[`strMeasure${numero}`]}` }</span>
              : '' }
          </li>,
        );
      }
    }
    return array;
  }

  return (
    (!initialItemApi)
      ? (<p>Loading...</p>)
      : initialItemApi.map((meal, index) => (
        <div key={ index }>
          <img
            data-testid="recipe-photo"
            src={ meal.strMealThumb }
            alt={ meal.strMeal }
            width="50px"
          />
          <h2 data-testid="recipe-title">{ meal.strMeal }</h2>
          <h4 data-testid="recipe-category">
            { meal.strCategory }
          </h4>
          <div>
            <h3>Ingredientes</h3>
            { renderIngrediente(meal) }
          </div>
          <h3>Instruções</h3>
          <p data-testid="instructions">{ meal.strInstructions }</p>
          <ReactPlayer
            controls
            data-testid="video"
            url={ meal.strYoutube }
            width="150"
            height="150"
          />
          <button type="button" data-testid="start-recipe-btn">Start recipe</button>
          <button type="button" data-testid="share-btn">Share</button>
          <button type="button" data-testid="favorite-btn">Favorite</button>
          <button
            type="button"
            data-testid={ `${index}-recomendation-card` }
          >
            Card receitas Recomendadas
          </button>
        </div>
      ))
  );
}

DetailsFood.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }).isRequired,
  }).isRequired,
};

export default DetailsFood;
