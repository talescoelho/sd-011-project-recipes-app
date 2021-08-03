import {
  requestRandomRecipe,
  requestRandomSucessRecipes,
} from '../actions/randomRecipeAction';

export default async function randomFetch(mealOrDrink) {
  let response;
  if (mealOrDrink === 'comidas') {
    response = await fetch('https://www.themealdb.com/api/json/v1/1/random.php');
  }

  if (mealOrDrink === 'bebidas') {
    response = await fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php');
  }

  return async (dispatch) => {
    try {
      dispatch(requestRandomRecipe());
      const data = await response.json();
      dispatch(requestRandomSucessRecipes(data));
    } catch (error) {
      console.error(error);
    }
  };
}
