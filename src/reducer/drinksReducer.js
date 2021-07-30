import {
  GET_DRINKS, GET_DRINKS_SUCCESS, GET_CATEGORIES_DRINKS_SUCCESS } from '../actions';

const INITIAL_STATE = {
  drinksFromApi: [],
  categories: [],
  isLoading: false,
};

function drinksReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
  case GET_DRINKS:
    return {
      ...state,
      isLoading: true,
    };
  case GET_DRINKS_SUCCESS:
    return {
      ...state,
      drinksFromApi: action.payload,
      isLoading: false,
    };
  case GET_CATEGORIES_DRINKS_SUCCESS:
    return {
      ...state,
      isLoading: false,
      categories: action.payload,
    };
  default:
    return state;
  }
}

export default drinksReducer;
