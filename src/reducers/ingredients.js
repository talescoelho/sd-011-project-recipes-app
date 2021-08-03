import { REQUEST_INGREDIENTS, REQUEST_SUCCESS_INGREDIENTS } from '../actions';

const INITIAL_STATE = {
  loading: false,
  dataApi: {},
};

function ingredients(state = INITIAL_STATE, action) {
  switch (action.type) {
  case REQUEST_INGREDIENTS:
    return {
      ...state,
      loading: true,
    };
  case REQUEST_SUCCESS_INGREDIENTS:
    return {
      ...state,
      loading: false,
      dataApi: action.payload,
    };
  default:
    return state;
  }
}

export default ingredients;
