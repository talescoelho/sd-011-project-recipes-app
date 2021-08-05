import {
  REQUEST_AREAS_SUCESS,
  REQUEST_AREAS,
  REQUEST_AREAS_FILTER,
  REQUEST_AREAS_SUCESS_FILTER,
} from '../actions/areaRecipe';

const INITIAL_STATE = {
  loading: true,
  loadingF: true,
  dataApi: {},
  filter: [],
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
  case REQUEST_AREAS_FILTER:
    return {
      ...state, loadingF: true,
    };
  case REQUEST_AREAS_SUCESS_FILTER:
    return {
      ...state, loading: false, filter: action.payload,
    };
  default:
    return state;
  }
}

export default areaRecipe;
