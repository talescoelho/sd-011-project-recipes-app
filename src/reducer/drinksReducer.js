import { GET_DRINKS, GET_DRINKS_SUCCESS } from '../actions';

const INITIAL_STATE = {
  drinksFromApi: [],
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
  default:
    return state;
  }
}

export default drinksReducer;
