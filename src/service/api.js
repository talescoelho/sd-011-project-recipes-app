import { requestSearch, requestSuccessSearch } from '../actions';

export default async function searchCase(mealOrDrink, radioQuery, search) {
  let response;
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
  console.log(response);
  return async (dispatch) => {
    try {
      dispatch(requestSearch());
      const data = await response.json();
      console.log(data);
      dispatch(requestSuccessSearch(data));
    } catch (error) {
      console.error(error);
    }
  };
}
