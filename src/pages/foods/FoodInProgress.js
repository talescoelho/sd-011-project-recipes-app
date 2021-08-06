import React from 'react';
import PropTypes from 'prop-types';
import ButtonShare from '../../components/ButtonShare';

export default function FoodInProgress({ location }) {
  const { state } = location;
  const {
    idMeal,
    strMeal,
    strMealThumb,
    strCategory,
    strInstructions,
  } = state;

  const getItems = (searchedKey) => Object.entries(state)
    .filter((value) => (value[0].includes(searchedKey) && value[1].length > 0));

  const ingredientsArray = getItems('Ingredient');
  const measurementsArray = getItems('Measure');

  return (
    <section>
      <img
        src={ strMealThumb }
        alt={ idMeal }
        data-testid="recipe-photo"
      />
      <h1 data-testid="recipe-title">
        { strMeal }
      </h1>
      <p data-testid="recipe-category">{ strCategory }</p>
      <ButtonShare
        path={ window.location.href }
        testid="share-btn"
      />
      {/* botão favoritar
      data-testid="favorite-btn" */}
      <h3>Receita</h3>
      { ingredientsArray.map((ingredient, index) => (
        <div key={ index }>
          <label key={ index } htmlFor={ `id${index}` }>
            <input
              id={ `id${index}` }
              data-testid={ `${index}-ingredient-step` }
              key={ index }
              type="checkbox"
              value={ ingredient[1] }
            />
            { `${ingredient[1]} - ${measurementsArray[index][1]}` }
          </label>
        </div>
      )) }
      <h3>
        Instruções
      </h3>
      <p data-testid="instructions">{ strInstructions }</p>
      <button
        type="button"
        data-testid="finish-recipe-btn"
      >
        Finalizar Receita
      </button>
    </section>
  );
}

FoodInProgress.propTypes = {
  strCategory: PropTypes.string,
  strMeal: PropTypes.string,
  idMeal: PropTypes.string,
  strMealThumb: PropTypes.string,
  strInstructions: PropTypes.string,
  strAlcoholic: PropTypes.string,
}.isRequired;
