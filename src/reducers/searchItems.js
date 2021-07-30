import {
  REQUEST_SEARCH,
  REQUEST_SUCCESS_SEARCH,
  ITEM_LENGTH_ONE,
  TURN_GIVE_ID_FALSE } from '../actions';

const INITIAL_STATE = {
  loading: true,
  dataApi: {},
  giveId: false,
};

function searchItemsReducer(state = INITIAL_STATE, action) {
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
  case TURN_GIVE_ID_FALSE:
    return {
      ...state,
      giveId: false,
      dataApi: {},
      loading: true,
    };
  default:
    return state;
  }
}

export default searchItemsReducer;
