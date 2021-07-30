// alterar com as informacoes necessarias
import { ADD_EMAIL } from '../actions';

const INITIAL_STATE = {
  email: '',
};

// alterar com as informacoes necessarias
function userReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
  case ADD_EMAIL:
    return { ...state, email: action.email };
  default:
    return state;
  }
}

export default userReducer;
