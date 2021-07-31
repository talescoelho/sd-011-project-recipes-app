import { requestSearch, requestSuccessSearch, itemLengthOne } from '../actions';

function caseItemLengthOne(data, dispatch, mealOrDrink) {
  const mealsOrDrinks = mealOrDrink === 'meal' ? 'meals' : 'drinks';
  if (data && data[mealsOrDrinks].length === 1) {
    dispatch(itemLengthOne());
  }
}

export default async function searchCase(mealOrDrink, radioQuery, search) {
  let response;
  if (mealOrDrink === 'meal' && !radioQuery) {
    response = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=');
  }
  if (mealOrDrink === 'drink' && !radioQuery) {
    response = await fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=');
  }
  if (mealOrDrink === 'meal') {
    switch (radioQuery) {
    case 'ingrediente':
      response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${search}`);
      break;
    case 'nome':
      response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`);
      break;
    case 'primeiraletra':
      response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${search}`);
      break;
    default:
      break;
    }
  }
  if (mealOrDrink === 'drink') {
    switch (radioQuery) {
    case 'ingrediente':
      response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${search}`);
      break;
    case 'nome':
      response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${search}`);
      break;
    case 'primeiraletra':
      response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${search}`);
      break;
    default:
      break;
    }
  }
  // console.log(response);
  return async (dispatch) => {
    try {
      dispatch(requestSearch());
      const data = await response.json();
      // console.log(data);
      dispatch(requestSuccessSearch(data));
      caseItemLengthOne(data, dispatch, mealOrDrink);
    } catch (error) {
      console.error(error);
    }
  };
}
