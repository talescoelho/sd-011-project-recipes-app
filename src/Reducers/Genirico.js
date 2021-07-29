const LOGIN = 'LOGIN';

const INITIAL_STATE = {
  logged: false,
  clients: [],
  id: 1,
};

function generico(state = INITIAL_STATE, action) {
  switch (action.type) {
  case LOGIN:
    return { ...state, logged: true };
  default:
    return state;
  }
}

export default generico;
