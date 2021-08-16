const INITIAL_STATE = {
  search: { type: 'searchName', key: '' },
};

const recipes = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case 'SET_SEARCH':
    return {
      ...state,
      search: action.search,
    };
  default:
    return state;
  }
};

export default recipes;
