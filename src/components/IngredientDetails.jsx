import React, { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import AppContext from '../context/AppContext';
import '../styles/carousel.css';

function IngredientDetails({ inProcess, food, drink }) {
  const { idDetails, toggle, getAndSetLocalStorage, ableButton } = useContext(AppContext);
  const [buttonDisable, setButtonDisable] = useState(true);
  console.log(idDetails[0]);

  const foodOrDrinkProcess = food ? {
    meals: {
      [idDetails[0].idMeal]: [],
    },
    cocktails: {
    },
  } : {
    meals: {
    },
    cocktails: {
      [idDetails[0].idDrink]: [],
    },
  };

  const ingredients = Object.keys(idDetails[0])
    .filter((el) => el.includes('strIngredient'));
  const measure = Object.keys(idDetails[0]).filter((el) => el.includes('strMeasure'));

  const ingredientList = ingredients
    .filter((el) => idDetails[0][el])
    .map((ing, index) => `${idDetails[0][ing]} - ${idDetails[0][measure[index]]}`.trim());

  function handleButton(e) {
    toggle(e, drink);
    ableButton(food, ingredientList, setButtonDisable);
  }

  useEffect(() => {
    getAndSetLocalStorage(inProcess, food, foodOrDrinkProcess);
    ableButton(food, ingredientList, setButtonDisable);
  }, []);

  return (
    <>
      <h3>Ingredients</h3>
      <ul>
        {ingredientList && ingredientList
          .map((item, index) => (
            <li
              style={ { listStyle: 'none' } }
              key={ index }
              data-testid={ inProcess
                ? `${index}-ingredient-step`
                : `${index}-ingredient-name-and-measure` }
            >
              {inProcess
                ? (
                  <label id={ index } htmlFor={ item } className={ item }>
                    <input
                      id={ item }
                      type="checkbox"
                      value={ index }
                      onClick={ (e) => handleButton(e) }
                    />
                    {item}
                  </label>) : item }
            </li>))}
      </ul>
      <h3>Instructions</h3>
      <p data-testid="instructions">{idDetails[0].strInstructions}</p>
      {inProcess && (
        <Link to="/receitas-feitas">
          <button
            data-testid="finish-recipe-btn"
            type="button"
            disabled={ buttonDisable }
          >
            Finalizar
          </button>
        </Link>
      )}
    </>
  );
}

export default IngredientDetails;

IngredientDetails.propTypes = {
  food: PropTypes.bool.isRequired,
  drink: PropTypes.bool.isRequired,
  inProcess: PropTypes.bool.isRequired,
};
