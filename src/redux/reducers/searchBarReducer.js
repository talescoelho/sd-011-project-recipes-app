import { REQUEST_TYPE_API, RECEIVE_TYPE_API } from '../actions/searchBarActions';

const INITIAL_STATE = {
  receiveData: [],
  isFetching: false,
};

function searchBarReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
  case REQUEST_TYPE_API:
    return {
      ...state,
      isFetching: true,
    };
  case RECEIVE_TYPE_API:
    return {
      ...state,
      receiveData: action.data,
      isFetching: false,
    };
  default:
    return state;
  }
}

export default searchBarReducer;
