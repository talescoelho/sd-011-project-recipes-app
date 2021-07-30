// import { combineReducers } from 'redux';
import { SAVE_EMAIL } from '../actions';

const INITIAL_STATE = {
  email: '',
};

// const rootReducer = combineReducers({});

function emailReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
  case SAVE_EMAIL:
    return { ...state, email: action.email };
  default:
    return state;
  }
}

export default emailReducer;
