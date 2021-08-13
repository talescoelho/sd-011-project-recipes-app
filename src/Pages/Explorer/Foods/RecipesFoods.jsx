import React, { useEffect, useState } from 'react';
import HeaderExpIngredients from '../../../Components/headers/HeaderExploreIngredients';
import LowerMenu from '../../../Components/footer/LowerMenu';
import IngredientCard from '../../../Components/cards/IngredientCard';
import { listFoodIngredients } from '../../../Services/ApiFood';

function RecipesFoods() {
  const [ingredientsListMeal, setIngredientsListMeal] = useState([]);

  useEffect(() => {
    async function fetchList() {
      const MealListAPI = await listFoodIngredients();
      setIngredientsListMeal(MealListAPI.meals);
    }
    fetchList();
  }, []);

  return (
    <>
      <HeaderExpIngredients />
      {console.log(ingredientsListMeal)}
      <IngredientCard ingredientsList={ ingredientsListMeal } drink={ false } />
      <LowerMenu />
    </>
  );
}

export default RecipesFoods;
