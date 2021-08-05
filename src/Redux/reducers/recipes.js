const initialState = {
  formInfo: '',
  cards: [],
  categories: { drinks: [], meals: [] },
  untouched: '',
  selectedCategory: '',
};

const recipe = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
  case 'SEND_FORM_DATA': {
    return { ...state, formInfo: payload };
  }
  case 'FETCH_FOOD_CARD': {
    const { filtered, selectedCategory } = payload;
    return { ...state, cards: filtered, selectedCategory };
  }
  case 'FETCH_FOOD_CATEGORIES': {
    const { array } = payload;
    return { ...state, categories: { ...state.categories, [payload.type]: array } };
  }

  case 'CLEAR_FORM_INFO': {
    return { ...state, formeInfo: '' };
  }

  default:
    return { ...state };
  }
};

export default recipe;
