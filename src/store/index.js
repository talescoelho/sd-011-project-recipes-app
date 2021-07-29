import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from '../reducers';

const store = createStore(reducer, composeWithDevTools(
  applyMiddleware(...middleware),
  rootReducer,
));

export default store;
