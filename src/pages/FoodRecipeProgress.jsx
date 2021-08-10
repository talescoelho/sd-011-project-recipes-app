import React from 'react';
import ConcludeRecipe from '../components/RecipeProgress/ConcludeRecipe';
import IngListWithCheckbox from '../components/RecipeProgress/IngListWithCheckbox';
import RecipeInstructions from '../components/common/RecipeInstructions';

const FoodRecipeProgress = () => (
  <>
    <div>Tela de receita em processo de comidas</div>
    <IngListWithCheckbox />
    <ConcludeRecipe />
    <RecipeInstructions strInstructions="Send Recipe Instructions by props" />
  </>
);

export default FoodRecipeProgress;
