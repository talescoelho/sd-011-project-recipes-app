const initialState = {
  name: '',
  orders: '',
};

const userReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
  case 'SEND_USER_INFO': {
    return { ...state, name: payload };
  }

  default:
    return { ...state };
  }
};

export default userReducer;
