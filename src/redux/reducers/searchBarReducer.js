import { UPDATE_QUERY, UPDATE_SELECTED_FILTER,
  SAVE_SEARCH_RESULTS } from '../actions/searchBarActions';

const INITIAL_STATE = {
  query: '',
  selectedFilter: 'name',
  searchResults: [],
};

function searchBarReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
  case UPDATE_QUERY:
    return { ...state, query: action.payload };
  case UPDATE_SELECTED_FILTER:
    return { ...state, selectedFilter: action.payload };
  case SAVE_SEARCH_RESULTS:
    return { ...state, searchResults: action.payload };
  default:
    return state;
  }
}

export default searchBarReducer;
