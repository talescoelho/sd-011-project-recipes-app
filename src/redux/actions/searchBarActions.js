import { fetchAPIName, fetchFoodIngredientSearch,
  fetchAPIFirstLetter } from '../../services/fetchAPIFood';
import { fetchDrinkIngredientSearch, fetchAPIFirstLetter as fetchDrinkFirstLetter,
  fetchAPIName as fetchDrinkName } from '../../services/fetchAPIDrink';

export const UPDATE_QUERY = 'UPDATE_QUERY';
export const UPDATE_SELECTED_FILTER = 'UPDATE_SELECTED_FILTER';
export const SAVE_SEARCH_RESULTS = 'SAVE_SEARCH_RESULTS';

export const updateQuery = (payload) => ({
  type: UPDATE_QUERY,
  payload,
});

export const updateSelectedFilter = (payload) => ({
  type: UPDATE_SELECTED_FILTER,
  payload,
});

const saveSearchResults = (payload) => ({
  type: SAVE_SEARCH_RESULTS,
  payload,
});

export const executeFoodSearch = (query, filter) => async (dispatch) => {
  switch (filter) {
  case 'ingredient': {
    const ingredientsResult = await fetchFoodIngredientSearch(query);
    await dispatch(saveSearchResults(ingredientsResult));
    break;
  }
  default:
  case 'name': {
    const nameResults = await fetchAPIName(query);
    await dispatch(saveSearchResults(nameResults));
    break;
  }
  case 'firstLetter': {
    const firstLetterResults = await fetchAPIFirstLetter(query);
    await dispatch(saveSearchResults(firstLetterResults));
    break;
  }
  }
};

export const executeDrinkSearch = (query, filter) => async (dispatch) => {
  switch (filter) {
  case 'ingredient': {
    const ingredientsResult = await fetchDrinkIngredientSearch(query);
    await dispatch(saveSearchResults(ingredientsResult));
    break;
  }
  default:
  case 'name': {
    const nameResults = await fetchDrinkName(query);
    await dispatch(saveSearchResults(nameResults));
    break;
  }
  case 'firstLetter': {
    const firstLetterResults = await fetchDrinkFirstLetter(query);
    console.log(firstLetterResults);
    await dispatch(saveSearchResults(firstLetterResults));
    break;
  }
  }
};
