import { SUCCESS } from '../actions';

const INITIAL_STATE = {
  foodCardsList: [],
  foodCategoriesList: [],
  selectedCategory: 'All',
};

function foodReducers(state = INITIAL_STATE, action) {
  switch (action.type) {
  case SUCCESS:
    return {
      ...state,
      foodCardsList: action.payload,
    };
  default:
    return state;
  }
}

export default foodReducers;
