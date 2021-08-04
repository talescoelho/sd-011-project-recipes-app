import { GET_DRINKS, GET_DRINKS_SUCCESS, GET_DRINKS_ERROR } from '../actions';

const INITIAL_STATE = {
  drinks: [],
  loading: false,
  error: null,
};

const drinksReducer = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
  case GET_DRINKS:
    return {
      ...state,
      loading: true,
      error: null,
    };
  case GET_DRINKS_SUCCESS:
    return {
      ...state,
      loading: false,
      drinks: payload,
    };
  case GET_DRINKS_ERROR:
    return {
      ...state,
      loading: false,
      error: payload,
    };
  default:
    return state;
  }
};

export default drinksReducer;
