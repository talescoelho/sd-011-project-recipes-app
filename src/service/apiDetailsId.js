import {
  requestDetailsId,
  requestSuccessDetailsId,
  requestRecomendation,
} from '../actions';

export function apiDetailsId(mealOrDrink, id) {
  let responseDetail;
  if (mealOrDrink === 'meals') {
    responseDetail = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`;
  }
  if (mealOrDrink === 'drinks') {
    responseDetail = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`;
  }
  return async (dispatch) => {
    try {
      dispatch(requestDetailsId());
      const response = await fetch(responseDetail);
      const data = await response.json();
      dispatch(requestSuccessDetailsId(data));
    } catch (error) {
      console.error(error);
    }
  };
}

export async function apiRecomendation(mealOrDrink) {
  let responseRecomendation;
  let data = [];
  const magiCNumber = 6;
  if (mealOrDrink === 'meals') {
    responseRecomendation = await fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=');
    const { drinks } = await responseRecomendation.json();
    data = drinks.slice(0, magiCNumber);
  }
  if (mealOrDrink === 'drinks') {
    responseRecomendation = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=');
    const { meals } = await responseRecomendation.json();
    data = meals.slice(0, magiCNumber);
  }
  return (dispatch) => {
    try {
      dispatch(requestRecomendation(data));
    } catch (error) {
      console.error(error);
    }
  };
}
