import {
  requestDetailsId,
  requestSuccessDetailsId,
  requestRecomendation,
} from '../actions';

export async function apiDetailsId(mealOrDrink, id) {
  let responseDetail;
  if (mealOrDrink === 'meal') {
    responseDetail = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
  }
  if (mealOrDrink === 'drink') {
    responseDetail = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`);
  }
  return async (dispatch) => {
    try {
      dispatch(requestDetailsId());
      const data = await responseDetail.json();
      dispatch(requestSuccessDetailsId(data));
    } catch (error) {
      console.error(error);
    }
  };
}
export async function apiRecomendation(mealOrDrink) {
  let responseRecomendation;
  if (mealOrDrink === 'meal') {
    responseRecomendation = await fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=');
  }
  if (mealOrDrink === 'drink') {
    responseRecomendation = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=');
  }
  return async (dispatch) => {
    try {
      const data = await responseRecomendation.json();
      dispatch(requestRecomendation(data));
    } catch (error) {
      console.error(error);
    }
  };
}
