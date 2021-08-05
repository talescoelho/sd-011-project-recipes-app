import React, { useContext } from 'react';
import RecipeAppContext from '../context/RecipeAppContext';

function RenderDrinkInstruction() {
  const { drink } = useContext(RecipeAppContext);
  return (
    <p data-testid="instructions">
      { drink.strInstructions }
    </p>
  );
}

export default RenderDrinkInstruction;
