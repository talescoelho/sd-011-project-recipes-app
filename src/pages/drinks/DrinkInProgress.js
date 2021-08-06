import React from 'react';
import PropTypes from 'prop-types';
import ButtonShare from '../../components/ButtonShare';

export default function DrinkInProgress({ location }) {
  const { state } = location;
  const {
    strCategory,
    strDrink,
    idDrink,
    strDrinkThumb,
    strInstructions,
    strAlcoholic,
  } = location.state;

  const getItems = (searchedKey) => Object.entries(state)
    .filter((value) => (value[0].includes(searchedKey) && value[1]));

  const ingredientsArray = getItems('Ingredient');
  const measurementsArray = getItems('Measure');

  return (
    <section>
      <img
        src={ strDrinkThumb }
        alt={ idDrink }
        data-testid="recipe-photo"
      />
      <h1 data-testid="recipe-title">
        { strDrink }
      </h1>
      <p data-testid="recipe-category">{ strCategory }</p>
      <ButtonShare
        path={ window.location.href }
        testid="share-btn"
      />
      {/* botão favoritar
      data-testid="favorite-btn" */}
      <p>{ strAlcoholic }</p>
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
            { `${ingredient[1]} ${measurementsArray[index]
              ? ` - ${measurementsArray[index][1]}` : ''}` }
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

DrinkInProgress.propTypes = {
  strCategory: PropTypes.string,
  strDrink: PropTypes.string,
  idDrink: PropTypes.string,
  strDrinkThumb: PropTypes.string,
  strInstructions: PropTypes.string,
  strAlcoholic: PropTypes.string,
}.isRequired;
