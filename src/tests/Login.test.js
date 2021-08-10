// Login.test.js
import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import Login from '../pages/Login';
import App from '../App';
import renderWithRedux from './renderWithRedux';

const mockInitialState = {
  recipesData: [],
  recipeDetailsData: [],
  isLoading: false,
};

describe('Testes para página de Login', () => {
  it('Verifica se há um campo para o email', () => {
    const { getByTestId } = renderWithRedux(
      <App>
        <Login />
      </App>,
      { initialState: mockInitialState },
    );
    const emailField = getByTestId('email-input');
    expect(emailField).toBeInTheDocument();
  });

  it('Verifica se há um campo para o password', () => {
    const { getByTestId } = renderWithRedux(
      <App>
        <Login />
      </App>,
      { initialState: mockInitialState },
    );
    const passwordField = getByTestId('password-input');
    expect(passwordField).toBeInTheDocument();
  });
  it('Verifica se há um botão para submter', () => {
    const { getByTestId } = renderWithRedux(
      <App>
        <Login />
      </App>,
      { initialState: mockInitialState },
    );
    const button = getByTestId('login-submit-btn');
    expect(button).toBeInTheDocument();
  });
  it('Verifica se há um título', () => {
    const { getByText } = renderWithRedux(
      <App>
        <Login />
      </App>,
      { initialState: mockInitialState },
    );
    const title = getByText(/Login/);
    expect(title).toBeInTheDocument();
  });
});
