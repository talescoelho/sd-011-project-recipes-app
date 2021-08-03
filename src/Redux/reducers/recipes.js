const initialState = {
  formInfo: '',
  cards: [],
};

const recipe = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
  case 'SEND_FORM_DATA': {
    return { ...state, formInfo: payload };
  }
  case 'GET_SEARCH_API': {
    const { data } = payload;
    return { ...state, data };
  }
  case 'FETCH_FOOD_CARD': {
    return { ...state, cards: payload };
  }

  default:
    return { ...state };
  }
};

export default recipe;
