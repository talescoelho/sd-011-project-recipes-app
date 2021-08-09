const initialState = {
  name: '',
  orders: '',
  favoriteRecipes: '',
};

const userReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
  case 'SEND_USER_INFO': {
    return { ...state, name: payload };
  }
  case 'UPDATE_FAVORITE': {
    return { ...state, favoriteRecipes: payload };
  }

  case 'GET_FAVORITE_RECIPES': {
    return { ...state, favoriteRecipes: payload };
  }

  default:
    return { ...state };
  }
};

export default userReducer;
