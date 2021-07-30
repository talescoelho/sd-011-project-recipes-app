import { REQUEST_DETAILS_ID, REQUEST_SUCCESS_DETAILS_ID } from '../actions';

const INITIAL_STATE = {
  loading: false,
  dataApi: {},
};

function detailsIdReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
  case REQUEST_DETAILS_ID:
    return {
      ...state,
      loading: true,
    };
  case REQUEST_SUCCESS_DETAILS_ID:
    return {
      ...state,
      loading: false,
      dataApi: action.payload,
    };
  default:
    return state;
  }
}

export default detailsIdReducer;
