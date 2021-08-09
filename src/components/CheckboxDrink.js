import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function CheckboxDrink({ ingredients, measures, pathname }) {
  const [allCheckboxMarkup, setAllCheckboxMarkup] = useState(false);
  const [allCheckbox, setAllCheckbox] = useState([]);

  const pathnameSplit = pathname.split('/');
  const idRecipe = pathnameSplit[2];

  useEffect(() => {
    const inProgressRecipesStorage = JSON.parse(
      localStorage.getItem('inProgressRecipes'),
    );

    if (!inProgressRecipesStorage) {
      localStorage.setItem(
        'inProgressRecipes', JSON.stringify({
          cocktails: '',
          meals: '',
        }),
      );
    }
  }, []);

  function saveDrinkProgress(currentLocalStorage, ingredient, idRecipee) {
    const drinkSavedIngredients = currentLocalStorage.cocktails[idRecipee];

    if (!drinkSavedIngredients) {
      localStorage.setItem(
        'inProgressRecipes',
        JSON.stringify({
          ...currentLocalStorage,
          cocktails: {
            [idRecipee]: [ingredient],
          },
        }),
      );
    } else {
      localStorage.setItem(
        'inProgressRecipes',
        JSON.stringify({
          ...currentLocalStorage,
          cocktails: {
            [idRecipee]: [...drinkSavedIngredients, ingredient],
          },
        }),
      );
    }
  }

  function saveProgress(ingredient) {
    const savedIngredients = JSON.parse(localStorage.getItem('inProgressRecipes'));

    saveDrinkProgress(savedIngredients, ingredient, idRecipe);
  }

  function handleCheckbox() {
    setAllCheckbox([...allCheckbox, true]);

    if (allCheckbox.length + 1 === ingredients.length) {
      setAllCheckboxMarkup(!allCheckboxMarkup);
    } else {
      setAllCheckboxMarkup(false);
    }
  }

  const activedIngredients = JSON.parse(localStorage.getItem('inProgressRecipes'));

  return (
    <div>
      {activedIngredients
      && ingredients.map((ingredient, index) => (
        <div key={ index } data-testid={ `${index}-ingredient-step` }>
          <input
            type="checkbox"
            id={ ingredients[index] }
            onChange={ () => {
              handleCheckbox();
              saveProgress(ingredient);
            } }
            checked={ (
              activedIngredients.cocktails[idRecipe]
              && activedIngredients.cocktails[idRecipe].includes(ingredient)
            ) }
          />
          <label htmlFor={ ingredients[index] }>
            {ingredient}
            {' '}
            <strong>{measures[index]}</strong>
          </label>
        </div>
      ))}
      <Link to={ `${pathname}/in-progress` }>
        <button
          disabled={ !allCheckboxMarkup }
          className="start-recipe"
          type="button"
          data-testid="finish-recipe-btn"
        >
          Finalizar Receita
        </button>
      </Link>
    </div>
  );
}

export default CheckboxDrink;

CheckboxDrink.propTypes = {
  ingredients: PropTypes.arrayOf(PropTypes.string),
  measures: PropTypes.arrayOf(PropTypes.string),
  pathname: PropTypes.string,
}.isRequired;
