import React from 'react';
import ConcludeRecipe from '../components/RecipeProgress/ConcludeRecipe';
import IngListWithCheckbox from '../components/RecipeProgress/IngListWithCheckbox';

const FoodRecipeProgress = () => (
  <>
    <div>Tela de receita em processo de comidas</div>
    <IngListWithCheckbox />
    <ConcludeRecipe />
  </>
);

export default FoodRecipeProgress;
