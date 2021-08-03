import {
  REQUEST_AREAS_SUCESS,
  REQUEST_AREAS,
} from '../actions/areaRecipe';

const INITIAL_STATE = {
  loading: true,
  dataApi: {},
};

function areaRecipe(state = INITIAL_STATE, action) {
  switch (action.type) {
  case REQUEST_AREAS:
    return {
      ...state,
      loading: true,
    };
  case REQUEST_AREAS_SUCESS:
    return {
      ...state, loading: false, dataApi: action.payload,
    };
  default:
    return state;
  }
}

export default areaRecipe;
