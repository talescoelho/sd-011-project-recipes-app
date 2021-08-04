import React from 'react';

const IngredientRecipes = ({ ingredient }) => (
  ingredient.map((item, index) => (
    <label
      key={ index }
      htmlFor={ index }
      data-testid={ `${index}-ingredient-step` }
    >
      <input
        type="checkbox"
        id={ index }
      />
      { item }
    </label>
  ))
);

export default IngredientRecipes;
