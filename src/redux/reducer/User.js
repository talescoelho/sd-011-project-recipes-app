const INITIAL_STATE = {
  email: '',
};

function User(state = INITIAL_STATE, action) {
  switch (action.type) {
  case 'SEND_USER_EMAIL_TO_STORE':
    return { ...state, email: action.payload };
  default:
    return state;
  }
}

export default User;
