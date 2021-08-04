import React from 'react';

// import { Container } from './styles';

function DetailsIngredientList() {
  const index = 0;
  return (
    <div>
      <h4>Ingredientes</h4>
      <ul>
        <li data-testid={ `${index}-ingredient-name-and-measure` }>Ingredient</li>
      </ul>
    </div>
  );
}

export default DetailsIngredientList;
