import React from 'react';

// import { Container } from './styles';

function components() {
  return (
    <li
      id={ ingredient[1] }
      key={ ingredient }
      data-testid={ `${index}-ingredient-step` }
    >
      <input
        type="checkbox"
        onClick={ (event) => handleToggleDoneIngredient(event) }
      />
      {`${ingredientsArr[index][1]}  
        ${ingredientsQuantityArr[index]
      ? `- ${ingredientsQuantityArr[index][1]}` : ''}`}
    </li>
  );
}

export default components;
