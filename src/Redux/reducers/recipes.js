const initialState = {
  formInfo: '',
  data: [],
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
  default:
    return { ...state };
  }
};

export default recipe;
