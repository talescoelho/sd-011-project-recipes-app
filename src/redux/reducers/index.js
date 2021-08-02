import { combineReducers } from 'redux';
import handleIngredients from './ingredientsApiReducers';

const rootReducer = combineReducers({ handleIngredients });

export default rootReducer;
