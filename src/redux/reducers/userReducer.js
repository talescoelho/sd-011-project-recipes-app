// alterar com as informacoes necessarias
const INITIAL_STATE = {
  state: '',
};

// alterar com as informacoes necessarias
function userReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
  case 'NEW_ACTION':
    return { state: action.state };
  default:
    return state;
  }
}

export default userReducer;
