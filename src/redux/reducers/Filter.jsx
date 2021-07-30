import { FETCH_ERROR, FETCH_STARTED, FETCH_SUCESS } from '../actions';

const INITIAL_STATE = {
  meals: [],
  isLoading: false,
  error: '',
};

const Filter = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case FETCH_STARTED:
    return { ...state, isLoading: true };
  case FETCH_SUCESS:
    return { ...state, meals: action.payload, isLoading: false };
  case FETCH_ERROR:
    return { ...state, error: action.payload, isLoading: false };
  default:
    return state;
  }
};

export default Filter;
