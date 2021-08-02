import { FETCH_BOTH_ERROR, FETCH_BOTH_STARTED,
  FETCH_BOTH_SUCESS, INPUT_HANDLE } from '../actions';

const INITIAL_STATE = {
  radio: '',
  searchInput: '',
  data: [],
  isLoading: false,
  error: '',
};

const Filter = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case FETCH_BOTH_STARTED:
    return { ...state, isLoading: true };
  case FETCH_BOTH_SUCESS:
    return { ...state, data: action.payload, isLoading: false };
  case FETCH_BOTH_ERROR:
    return { ...state, error: action.payload, isLoading: false };
  case INPUT_HANDLE:
    return { ...state, [action.name]: action.value };
  default:
    return state;
  }
};

export default Filter;
