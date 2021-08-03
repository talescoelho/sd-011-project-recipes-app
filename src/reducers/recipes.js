import * as actions from '../actions';

const INITIAL_STATE = {
  allRecipes: [],
  allCategories: [],
};

// @todo incluir all categorires no initial state
// @todo criar action que vai fazer o fetch das categorias
// @todo o componente did mount chamará a nova action para criação dos botões

export default function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
  case actions.REQUEST_SUCCESS:
    return { ...state, allRecipes: action.payload };
  case actions.CATEGORIES_SUCCESS:
    return { ...state, allCategories: action.payload };
  default:
    return state;
  }
}
