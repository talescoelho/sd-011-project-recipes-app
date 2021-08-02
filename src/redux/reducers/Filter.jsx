import { FETCH_BOTH_ERROR, FETCH_BOTH_STARTED,
  FETCH_BOTH_SUCESS, INPUT_HANDLE, RENDER_FILTER } from '../actions';

const INITIAL_STATE = {
  radio: '',
  searchInput: '',
  data: [],
  isLoading: false,
  error: '',
  render: false,
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
  case RENDER_FILTER:
    return { ...state, render: action.payload };
  default:
    return state;
  }
};

export default Filter;
