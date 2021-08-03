import React, { useState } from 'react';
import PropTypes from 'prop-types';

export default function IngredientsCheckList({ recipeType, id, strInstructions }) {
  const [render, setrender] = useState(false);

  const setCheckLocalStorage = ({ target }) => {
    const inProgressRecipes = JSON.parse(localStorage.inProgressRecipes);
    const recipeTypeList = inProgressRecipes[recipeType];
    const ingredientList = recipeTypeList[id];
    const newIngredientList = ingredientList.map((ingredient) => {
      if (ingredient.name === target.name) {
        return {
          ...ingredient,
          check: !ingredient.check,
        };
      }
      return ingredient;
    });
    const newInProgressRecipes = {
      ...inProgressRecipes,
      [recipeType]: {
        ...recipeTypeList,
        [id]: newIngredientList,
      },
    };
    localStorage.inProgressRecipes = JSON.stringify(newInProgressRecipes);
    setrender(!render);
  };

  const verifyAllCheck = () => {
    let allCheck = true;
    const ingredientsList = JSON.parse(localStorage.inProgressRecipes).meals[id];
    ingredientsList.forEach((ingrediet) => {
      if (ingrediet.check !== true) {
        allCheck = false;
      }
    });
    return allCheck;
  };

  const list = JSON.parse(localStorage.inProgressRecipes)[recipeType][id];

  return (
    <>
      {list
        .map((ingredient, index) => (
          <label key={ index } htmlFor={ ingredient.name }>
            <input
              type="checkbox"
              checked={ ingredient.check }
              name={ ingredient.name }
              onChange={ (e) => setCheckLocalStorage(e) }
            />
            <span className={ ingredient.check ? 'ingredientCheck' : '' }>
              {`${ingredient.name} ${ingredient.measure ? ingredient.measure : ''}`}
            </span>
          </label>
        ))}
      <p data-testid="instructions">{strInstructions}</p>
      <button type="button" disabled={ !verifyAllCheck() }>Finalizar receita</button>
    </>
  );
}

IngredientsCheckList.propTypes = {
  list: PropTypes.array,
}.isRequired;
