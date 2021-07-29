const INITITAL_STATE = {
  email: '',
};

function loginReducer(state = INITITAL_STATE, action) {
  switch (action.type) {
  case 'ADD_EMAIL':
    return {
      ...state,
      email: action.email,
    };
  default:
    return state;
  }
}

export default loginReducer;
