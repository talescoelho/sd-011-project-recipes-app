import React, { useEffect, useState } from 'react';
import HeaderExpIngredients from '../../../Components/headers/HeaderExploreIngredients';
import LowerMenu from '../../../Components/footer/LowerMenu';
import IngredientCard from '../../../Components/cards/IngredientCard';
import { listDrinkIngredients } from '../../../Services/ApiDrink';

function RecipesDrinks() {
  const [ingredientsListDrink, setIngredientsListDrink] = useState([]);

  useEffect(() => {
    async function fetchList() {
      const DrinkListAPI = await listDrinkIngredients();
      setIngredientsListDrink(DrinkListAPI.drinks);
    }
    fetchList();
  }, []);


  return (
    <>
      <HeaderExpIngredients />
      <IngredientCard ingredientsList={ ingredientsListDrink } drink />
      <LowerMenu />
    </>
  );
}

export default RecipesDrinks;
