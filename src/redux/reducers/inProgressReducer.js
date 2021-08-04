import { REQUEST_API,
  RECEIVE_API,
  FAILED_REQUEST,
  ADD_INGREDIENT_DRINK,
  ADD_INGREDIENT_MEAL,
  DELETE_INGREDIENT_DRINK,
  DELETE_INGREDIENT_MEAL,
  UPDATE_ARRAY } from '../actions';

const INITIAL_STATE = {
  ingredients: [],
  ingredientsDrink: [],
  recipeReceived: [],
  error: '',
  fetching: false,
};

function inProgressReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
  case REQUEST_API:
    return {
      ...state,
      fetching: true,
    };
  case RECEIVE_API:
    return {
      ...state,
      fetching: false,
      recipeReceived: action.payload,
    };
  case FAILED_REQUEST:
    return {
      ...state,
      error: action.payload,
      fetching: false,
    };
  case ADD_INGREDIENT_DRINK:
  case ADD_INGREDIENT_MEAL:
    return {
      ...state,
      ingredients: [...state.ingredients, action.ingredient],
    };
  case DELETE_INGREDIENT_DRINK:
  case DELETE_INGREDIENT_MEAL:
    return {
      ...state,
      ingredients: [...state.ingredients
        .filter((ing) => ing !== action.ingredient)],
    };
  case UPDATE_ARRAY:
    return {
      ...state,
      ingredients: action.payload,
    };
  default:
    return state;
  }
}

export default inProgressReducer;
