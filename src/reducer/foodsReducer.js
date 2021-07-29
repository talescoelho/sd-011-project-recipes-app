import { GET_FOODS, GET_FOODS_SUCCESS } from '../actions';

const INITIAL_STATE = {
  foodsFromApi: [],
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
  default:
    return state;
  }
}

export default foodsReducer;
