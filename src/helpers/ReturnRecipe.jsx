import { fetchFoodDetails, fetchDrinksDetails } from '../services/API';
import ingredientsMealDetails from './ingredientsMealDetails';
import ingredientsDrinksDetails from './ingredientsDrinkDetails';

const ReturnRecipe = async (id, pathname) => {
  if (pathname.includes('comidas')) {
    const fetchDetails = await fetchFoodDetails(id);
    const typeFood = 'comida';
    const recipeType = 'meals';
    const ingredientsList = ingredientsMealDetails(fetchDetails);
    return { fetchDetails, typeFood, recipeType, ingredientsList };
  }
  if (pathname.includes('bebidas')) {
    const fetchDetails = await fetchDrinksDetails(id);
    const typeFood = 'bebida';
    const recipeType = 'cocktails';
    const ingredientsList = ingredientsDrinksDetails(fetchDetails);
    return { fetchDetails, typeFood, recipeType, ingredientsList };
  }
};

export default ReturnRecipe;
