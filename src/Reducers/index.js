import { combineReducers } from 'redux';
import taskReducer from './Genirico';

const rootReducer = combineReducers({ taskReducer });

export default rootReducer;
