import React, { useContext } from 'react';
import RecipeAppContext from '../context/RecipeAppContext';

function RenderFoodInstruction() {
  const { meal } = useContext(RecipeAppContext);
  return (
    <p data-testid="instructions">
      { meal.strInstructions }
    </p>
  );
}

export default RenderFoodInstruction;
