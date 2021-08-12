import React from 'react';

const IngredientListToDetails = () => (
  <>
    <h2 className="ingredient-title text-center">Ingredients</h2>
    <ul className="ingredient-list">
      {ingredients.map((item, index) => (
        <li data-testid={ `${index}-ingredient-name-and-measure` } key={ index }>
          {item}
        </li>
      ))}
    </ul>
  </>
);

export default IngredientListToDetails;
