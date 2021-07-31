import {
  REQUEST_DETAILS_ID,
  REQUEST_SUCCESS_DETAILS_ID,
  REQUEST_SUCCESS_RECOMENDATION,
} from '../actions';

const INITIAL_STATE = {
  loading: false,
  dataApi: {},
  recomendation: [],
};

function detailsId(state = INITIAL_STATE, action) {
  switch (action.type) {
  case REQUEST_DETAILS_ID:
    return {
      ...state,
      loading: true,
    };
  case REQUEST_SUCCESS_DETAILS_ID:
    return { ...state, loading: false, dataApi: action.payload };
  case REQUEST_SUCCESS_RECOMENDATION:
    return { ...state, recomendation: action.payload };
  default:
    return state;
  }
}

export default detailsId;
