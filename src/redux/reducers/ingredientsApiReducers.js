import {
  FETCH_INGREDIENTS,
  FETCH_INGREDIENTS_SUCCESS,
  FETCH_BY_NAME,
  FETCH_BY_NAME_SUCCESS,
} from '../actions/IngredientsApiAction';

const INITIAL_STATE = {
  ingredient: [],
  byName: [],
  loading: false,
};

const handleIngredients = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case FETCH_INGREDIENTS || FETCH_BY_NAME:
    return {
      loading: true,
    };
  case FETCH_INGREDIENTS_SUCCESS:
    return {
      ingredient: action.payload.meals,
      loading: false,
    };
  case FETCH_BY_NAME_SUCCESS:
    return {
      byName: console.log(action.payload.meals),
      loading: false,
    };
  default:
    return state;
  }
};

export default handleIngredients;
