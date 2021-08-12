import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import { searchId } from '../services/RequestDrinks';

function DetailsDrink(props) {
  const { match: { params: { id } } } = props;
  const [initialItemApi, setInitialItemApi] = useState([]);

  async function getDetailsById() {
    const itemsDrink = await searchId(id);
    setInitialItemApi(itemsDrink);
  }

  useEffect(() => {
    getDetailsById();
  }, []);

  function renderIngrediente(drink) {
    const array = [];
    const limitItens = 15;
    for (let numero = 1; numero <= limitItens; numero += 1) {
      if (drink[`strIngredient${numero}`] !== null
        && drink[`strIngredient${numero}`] !== '') {
        array.push(
          <li
            data-testid={ `${numero - 1}-ingredient-name-and-measure` }
          >
            { `${drink[`strIngredient${numero}`]} ` }
            { (drink[`strMeasure${numero}`] !== null
              && drink[`strMeasure${numero}`] !== '')
              ? <span>{ `${drink[`strMeasure${numero}`]}` }</span>
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
      : initialItemApi.map((drink, index) => (
        <div key={ index }>
          <img
            data-testid="recipe-photo"
            src={ drink.strDrinkThumb }
            alt={ drink.strDrink }
            width="50px"
          />
          <h2 data-testid="recipe-title">{ drink.strDrink }</h2>
          <h4 data-testid="recipe-category">
            { drink.strAlcoholic }
          </h4>
          <div>
            <h3>Ingredientes</h3>
            { renderIngrediente(drink) }
          </div>
          <h3>Instruções</h3>
          <p data-testid="instructions">{ drink.strInstructions }</p>

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

DetailsDrink.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }).isRequired,
  }).isRequired,
};

export default DetailsDrink;
