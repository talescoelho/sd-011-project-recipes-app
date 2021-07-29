import { screen } from '@testing-library/dom';
import React from 'react';
import App from '../App';
import renderWithRouter from '../helper/renderWithRouter';

const EMAIL_INPUT = 'email-input';
const PASSWORD_INPUT = 'password-input';
const LOGIN_SUBMIT_BTN = 'login-submit-btn';

describe('1 - Check login page', () => {
  test('The route for this page must be  `/`', () => {
    const { history } = renderWithRouter(<App />, '/');
    expect(history.location.pathname).toBe('/');
  });

  test('Check user e-mail and password input login', () => {
    renderWithRouter(<App />, '/');
    const email = screen.getByTestId(EMAIL_INPUT);
    const password = screen.getByTestId(PASSWORD_INPUT);

    expect(email).toBeInTheDocument();
    expect(password).toBeInTheDocument();
  });

  test('Check button login with text `Entrar`', () => {
    renderWithRouter(<App />, '/');

    const btnId = screen.getByTestId(LOGIN_SUBMIT_BTN);
    const button = screen.getByText(/Entrar/i);
    expect(button).toBeInTheDocument();
    expect(btnId).toBeInTheDocument();
  });
});
