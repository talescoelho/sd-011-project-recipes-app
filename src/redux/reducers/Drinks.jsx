import { FETCH_DRINKS_ERROR, FETCH_DRINKS_STARTED,
  FETCH_DRINKS_SUCESS } from '../actions';

const INITIAL_STATE = {
  drinks: [],
  isLoading: false,
  error: '',
};

const Drinks = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case FETCH_DRINKS_STARTED:
    return { ...state, isLoading: true };
  case FETCH_DRINKS_SUCESS:
    return { ...state, drinks: action.payload, isLoading: false };
  case FETCH_DRINKS_ERROR:
    return { ...state, error: action.payload, isLoading: false };
  default:
    return state;
  }
};

export default Drinks;
