import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import RecipesReducer from '../redux/reducers';

export default function renderWithRedux(
  component,
  { initialState, store = createStore(RecipesReducer, initialState) } = {},
) {
  return {
    ...render(<Provider store={ store }>{component}</Provider>),
    store,
  };
}
