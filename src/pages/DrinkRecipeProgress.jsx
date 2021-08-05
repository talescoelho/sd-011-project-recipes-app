import React from 'react';
import ConcludeRecipe from '../components/RecipeProgress/ConcludeRecipe';
import IngListWithCheckbox from '../components/RecipeProgress/IngListWithCheckbox';

const DrinkRecipeProgress = () => (
  <>
    <div>Tela de receita em processo de bebida</div>
    <IngListWithCheckbox />
    <ConcludeRecipe />
  </>
);

export default DrinkRecipeProgress;
