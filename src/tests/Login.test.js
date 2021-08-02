import React from 'react';
import { Provider } from 'react-redux';
import { render, cleanup } from '@testing-library/react';
import { createStore, combineReducers } from 'redux';
import Login from '../pages/Login';
import emailReducer from '../redux/reducers/saveEmail';

const renderWithRedux = (component, { initialState,
  store = createStore(combineReducers({ emailReducer }), initialState) } = {}) => (
  { ...render(<Provider store={ store }>{component}</Provider>),
    store });

describe('Login Page tests', () => {
  beforeEach(cleanup);

  it('Verify inputs and button IDs', () => {
    const { getByTestId } = renderWithRedux(<Login />);
    const emailInput = getByTestId('email-input');
    const passwordInput = getByTestId('password-input');
    const button = getByTestId('login-submit-btn');

    expect(emailInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
    expect(button).toBeInTheDocument();
  });
});
