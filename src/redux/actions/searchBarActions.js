import { fetchAPIName, fetchFoodIngredientSearch, fetchAPIFirstLetter } from "../../services/fetchAPIFood";
import

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
  switch(filter){
    case 'ingredient':
    default:
      const ingredientsResult = await fetchFoodIngredientSearch(query);
      await dispatch(saveSearchResults(ingredientsResult));
      break;
    case 'name':
      const nameResults = await fetchAPIName(query);
      await dispatch(saveSearchResults(nameResults));
      break;
    case 'firstLetter':
      const firstLetterResults = await fetchAPIFirstLetter(query);
      await dispatch(saveSearchResults(firstLetterResults));
      break;
    

  }
}

export const executeDrinkSearch = (query, filter) => async (dispatch) => {
  switch(filter){
    case 'ingredient':
    default:
      const ingredientsResult = await fetchFoodIngredientSearch(query);
      await dispatch(saveSearchResults(ingredientsResult));
      break;
    case 'name':
      const nameResults = await fetchAPIName(query);
      await dispatch(saveSearchResults(nameResults));
      break;
    case 'firstLetter':
      const firstLetterResults = await fetchAPIFirstLetter(query);
      await dispatch(saveSearchResults(firstLetterResults));
      break;
    

  }
}
