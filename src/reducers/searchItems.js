import { REQUEST_SEARCH, REQUEST_SUCCESS_SEARCH } from '../actions';

const INITIAL_STATE = {
  loading: false,
  dataApi: '',
};

function userReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
  case REQUEST_SEARCH:
    return {
      ...state,
      loading: true,
    };
  case REQUEST_SUCCESS_SEARCH:
    return {
      ...state,
      loading: false,
      dataApi: action.payload,
    };
  default:
    return state;
  }
}

export default userReducer;
