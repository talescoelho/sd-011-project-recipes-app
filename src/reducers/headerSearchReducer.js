import {
  GET_HEADER_SEARCH, GET_HEADER_SEARCH_SUCCESS, GET_HEADER_SEARCH_ERROR,
} from '../actions';

const INITIAL_STATE = {
  categories: [],
  type: 'not defined',
  filter: '',
  loading: true,
  error: null,
};

const headerSearchReducer = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
  case GET_HEADER_SEARCH:
    return {
      ...state,
      loading: true,
      error: null,
    };
  case GET_HEADER_SEARCH_SUCCESS:
    return {
      ...state,
      loading: false,
      categories: payload.categories,
      type: payload.type,
    };
  case GET_HEADER_SEARCH_ERROR:
    return {
      ...state,
      loading: false,
      error: `${payload}`,
    };
  default:
    return state;
  }
};

export default headerSearchReducer;
