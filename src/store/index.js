import { composeWithDevTools } from 'redux-devtools-extension';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';

const store = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(thunk),
  ),
);

store.subscribe(() => {
  const reduxState = store.getState();
  localStorage.setItem('favoriteRecipes',
    JSON.stringify(reduxState.recipes.favorites));
});

export default store;
