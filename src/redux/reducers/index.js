import { combineReducers } from 'redux';
import emailReducer from './saveEmail';

const rootReducer = combineReducers({ emailReducer });

export default rootReducer;
