import React from 'react';
import MealDetailCard from '../../components/MealDetailCard';
import { RecipeDetailsProvider } from '../../context/RecipeDetails';

export default function FoodRecipes() {
  return (
    <div>
      Detalhes da comida
      <RecipeDetailsProvider>
        <MealDetailCard />
      </RecipeDetailsProvider>
    </div>
  );
}
