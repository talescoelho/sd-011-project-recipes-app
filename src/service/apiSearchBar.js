import { requestSearch, requestSuccessSearch, itemLengthOne } from '../actions';

export default async function searchCase(mealOrDrink, radioQuery, search) {
  let endpointApi;
  console.log(mealOrDrink);
  if (mealOrDrink === 'meal') {
    switch (radioQuery) {
    case 'ingrediente':
      endpointApi = (`https://www.themealdb.com/api/json/v1/1/filter.php?i=${search}`);
      break;
    case 'nome':
      endpointApi = (`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`);
      break;
    case 'primeiraletra':
      endpointApi = (`https://www.themealdb.com/api/json/v1/1/search.php?f=${search}`);
      break;
    default:
      break;
    }
  }
  if (mealOrDrink === 'drink') {
    switch (radioQuery) {
    case 'ingrediente':
      endpointApi = (`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${search}`);
      break;
    case 'nome':
      endpointApi = (`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${search}`);
      break;
    case 'primeiraletra':
      endpointApi = (`https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${search}`);
      break;
    default:
      break;
    }
  }
  console.log(endpointApi);
  return async (dispatch) => {
    try {
      const mealsOrDrinks = mealOrDrink === 'meal' ? 'meals' : 'drinks';
      dispatch(requestSearch());
      const response = await fetch(endpointApi);
      const data = await response.json();
      dispatch(requestSuccessSearch(data));
      console.log(data);
      if (data && data[mealsOrDrinks].length === 1) {
        dispatch(itemLengthOne());
      }
    } catch (error) {
      console.error(error);
    }
  };
}
