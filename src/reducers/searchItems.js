import { REQUEST_SEARCH, REQUEST_SUCCESS_SEARCH, ITEM_LENGTH_ONE } from '../actions';

const INITIAL_STATE = {
  loading: false,
  dataApi: {},
  giveId: false,
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
  case ITEM_LENGTH_ONE:
    return {
      ...state,
      giveId: true,
    };
  default:
    return state;
  }
}

export default userReducer;
