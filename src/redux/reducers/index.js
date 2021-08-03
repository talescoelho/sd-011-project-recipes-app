import { combineReducers } from 'redux';
import menuReducer from './menuReducer';
import emailReducer from './emailReducer';

const rootReducer = combineReducers({ menuReducer, emailReducer });

export default rootReducer;
