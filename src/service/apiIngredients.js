import { requestIngredients, requestSuccessIngredients } from '../actions';

async function apiIngredients(mealOrDrink, list) {
  let responseIngredients;
  if (mealOrDrink === 'meals') {
    responseIngredients = await fetch(`https://www.themealdb.com/api/json/v1/1/list.php?i=${list}`);
  }
  if (mealOrDrink === 'drinks') {
    responseIngredients = await
    fetch(`www.thecocktaildb.com/api/json/v1/1/list.php?i=${list}`);
  }
  return async (dispatch) => {
    try {
      dispatch(requestIngredients());
      const data = await responseIngredients.json();
      console.log(data);
      dispatch(requestSuccessIngredients(data));
    } catch (error) {
      console.error(error);
    }
  };
}

export default apiIngredients;
