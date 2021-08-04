import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { getDrinkDetail } from '../services/theCockTailAPI';
import { saveInProgressDrinkRecipes } from '../helpers/handleLocalStorage';

function DrinkRecipeInProgress({ match: { params: { id } } }) {
  const [recipe, setRecipe] = useState({});
  const [usedIngredients, setUsedIngredients] = useState([]);

  function listIngredients() {
    const maxIngredients = 20;
    const list = [];
    for (let index = 1; index <= maxIngredients; index += 1) {
      if (recipe[`strIngredient${index}`]) {
        list.push(
          `${recipe[`strIngredient${index}`]} - ${recipe[`strMeasure${index}`]}`,
        );
      }
    }
    return list;
  }

  function lineThroughUsedIngredients({ target }) {
    const label = target.parentElement;
    const labelClass = 'ingredient-checked';
    if (label.className === labelClass) {
      label.classList.remove(labelClass);
    } else {
      label.classList.add(labelClass);
    }
    if (target.checked) {
      setUsedIngredients([...usedIngredients, target.value]);
    } else {
      const remainingIngredients = usedIngredients
        .filter((ingredient) => ingredient !== target.value);
      setUsedIngredients(remainingIngredients);
    }
  }

  useEffect(() => {
    getDrinkDetail(id)
      .then((result) => setRecipe(...result));
  }, [setRecipe, id]);

  useEffect(() => {
    saveInProgressDrinkRecipes(id, usedIngredients);
  }, [id, usedIngredients]);

  const { strDrinkThumb, strDrink, strCategory, strInstructions, strAlcoholic } = recipe;
  return (
    <div>
      <img src={ strDrinkThumb } data-testid="recipe-photo" alt={ strDrink } />
      <h3 data-testid="recipe-title">{ strDrink }</h3>
      <button type="button" data-testid="share-btn">Compartilhar</button>
      <button type="button" data-testid="favorite-btn">Favoritar</button>
      <p>{ strAlcoholic }</p>
      <p data-testid="recipe-category">{ strCategory }</p>
      <form>
        {
          listIngredients().map((ingredient, index) => (
            <label
              htmlFor={ index }
              key={ index }
              data-testid={ `${index}-ingredient-step` }
            >
              <input
                value={ ingredient }
                type="checkbox"
                id={ index }
                name="ingredients"
                onClick={ lineThroughUsedIngredients }
              />
              { `${ingredient}` }

            </label>
          ))
        }
      </form>
      <p data-testid="instructions">{ strInstructions }</p>
      <button type="button" data-testid="finish-recipe-btn">Finalizar Receita</button>

    </div>
  );
}

DrinkRecipeInProgress.propTypes = {
  match: PropTypes.shape(PropTypes.any).isRequired,
};
export default DrinkRecipeInProgress;
