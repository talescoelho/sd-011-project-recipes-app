import React, { useState } from 'react';
import PropTypes from 'prop-types';

export default function IngredientsCheckList({ recipeType, id }) {
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

  const list = JSON.parse(localStorage.inProgressRecipes)[recipeType][id];

  return (
    <div>
      {console.log(list)}
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
    </div>
  );
}

IngredientsCheckList.propTypes = {
  list: PropTypes.array,
}.isRequired;
