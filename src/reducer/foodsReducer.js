import {
  GET_FOODS, GET_FOODS_SUCCESS, GET_CATEGORIES_FOODS_SUCCESS, FILTERED_FOODS_PER_CATEGORY,
} from '../actions';

const INITIAL_STATE = {
  foodsFromApi: [],
  categories: [],
  filteredPerCategory: [],
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
  case FILTERED_FOODS_PER_CATEGORY:
    return {
      ...state,
      filteredPerCategory: action.payload,
    };
  default:
    return state;
  }
}

export default foodsReducer;
