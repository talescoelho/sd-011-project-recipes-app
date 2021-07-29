import { EMAIL } from '../actions';

const INITIAL_STATE = {
  email: '',
};

function userReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
  case EMAIL:
    localStorage.setItem('mealsToken', 1);
    localStorage.setItem('cocktailsToken', 1);
    localStorage.setItem('user', JSON.stringify({ email: action.email }));
    return {
      ...state,
      email: action.email,
    };
  default:
    return state;
  }
}

export default userReducer;
