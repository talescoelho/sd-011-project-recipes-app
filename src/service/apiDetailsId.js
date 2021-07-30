import { requestDetailsId, requestSuccessDetailsId } from '../actions';

export default async function apiDetailsId(mealOrDrink, id) {
  let response;
  if (mealOrDrink === 'meal') {
    response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
  }
  if (mealOrDrink === 'drink') {
    response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`);
  }
  return async (dispatch) => {
    try {
      dispatch(requestDetailsId());
      const data = await response.json();
      dispatch(requestSuccessDetailsId(data));
    } catch (error) {
      console.error(error);
    }
  };
}
