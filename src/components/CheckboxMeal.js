import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function CheckboxMeal({ ingredients, measures, pathname }) {
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

  function saveMealProgress(currentLocalStorage, ingredient, idRecipee) {
    const mealSavedIngredients = currentLocalStorage.meals[idRecipee];

    if (!mealSavedIngredients) {
      localStorage.setItem(
        'inProgressRecipes',
        JSON.stringify({
          ...currentLocalStorage,
          meals: {
            [idRecipee]: [ingredient],
          },
        }),
      );
    } else {
      localStorage.setItem(
        'inProgressRecipes',
        JSON.stringify({
          ...currentLocalStorage,
          meals: {
            ...JSON.parse(localStorage.getItem('inProgressRecipes')).meals,
            [idRecipee]: [...mealSavedIngredients, ingredient],
          },
        }),
      );
    }
  }

  function saveProgress(ingredient) {
    const savedIngredients = JSON.parse(localStorage.getItem('inProgressRecipes'));

    saveMealProgress(savedIngredients, ingredient, idRecipe);
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
              activedIngredients.meals[idRecipe]
              && activedIngredients.meals[idRecipe].includes(ingredient)
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

export default CheckboxMeal;

CheckboxMeal.propTypes = {
  ingredients: PropTypes.arrayOf(PropTypes.string),
  measures: PropTypes.arrayOf(PropTypes.string),
  pathname: PropTypes.string,
}.isRequired;
