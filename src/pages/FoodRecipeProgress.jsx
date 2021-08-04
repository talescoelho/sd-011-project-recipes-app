import React from 'react';
import IngredientsListWithCheckbox from '../components/foodRecipe/IngListWithCheckbox';

const ingredientsList = ['tomate, pinhao, alface, frango'];

const FoodRecipeProgress = () => (
  <>
    <div>Tela de receita em processo de comidas</div>
    <IngredientsListWithCheckbox ingredients={ ingredientsList } />
  </>
);

export default FoodRecipeProgress;
