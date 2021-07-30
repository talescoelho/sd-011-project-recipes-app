import { GET_FOODS, GET_FOODS_SUCCESS, GET_CATEGORIES_FOODS_SUCCESS } from '../actions';

const INITIAL_STATE = {
  foodsFromApi: [],
  categories: [],
  isLoading: false,
};

function foodsReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
  case GET_FOODS:
    return {
      ...state,
      isLoading: true,
    };
  case GET_FOODS_SUCCESS:
    return {
      ...state,
      foodsFromApi: action.payload,
      isLoading: false,
    };
  case GET_CATEGORIES_FOODS_SUCCESS:
    return {
      ...state,
      isLoading: false,
      categories: action.payload,
    };
  default:
    return state;
  }
}

export default foodsReducer;
