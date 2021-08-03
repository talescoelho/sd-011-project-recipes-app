const INITIAL_STATE = {
  searcResults: [],
};

function Mechanics(state = INITIAL_STATE, action) {
  switch (action.type) {
  case 'MODIFY_SEARCH_RESULTS':
    return { ...state, searcResults: action.payload };
  default:
    return state;
  }
}

export default Mechanics;
