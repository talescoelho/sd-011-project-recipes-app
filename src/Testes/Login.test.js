import { screen } from '@testing-library/dom';
import { fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import App from '../App';
import renderWithRouter from '../helper/renderWithRouter';

const EMAIL_INPUT = 'email-input';
const EMAIL_PLACEHOLDER = 'E-mail';
const PASSWORD_INPUT = 'password-input';
const PASSWORD_PLACEHOLDER = 'Senha';
const LOGIN_SUBMIT_BTN = 'login-submit-btn';
const VALID_EMAIL = 'name@email.com';
const VALID_PASSWORD = '1234567';
const LOCAL_STORAGE_MEALSTOKEN_KEY = 'mealsToken';
const LOCAL_STORAGE_COCKTAILSTOKEN_KEY = 'cocktailsToken';
const LOCAL_STORAGE_USER_KEY = 'user';

beforeEach(() => jest.clearAllMocks());

describe('1 - Check route, inputs and button from page Login', () => {
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

  test('Check user e-mail and password input text', () => {
    renderWithRouter(<App />, '/');
    const email = screen.getByTestId(EMAIL_INPUT);
    const password = screen.getByTestId(PASSWORD_INPUT);
    userEvent.type(email, VALID_EMAIL);
    userEvent.type(password, VALID_PASSWORD);
    expect(email.value).toEqual(VALID_EMAIL);
    expect(password.value).toEqual(VALID_PASSWORD);
  });

  test('Check button login with text `Entrar`', () => {
    renderWithRouter(<App />, '/');
    const btnId = screen.getByTestId(LOGIN_SUBMIT_BTN);
    const button = screen.getByText(/Entrar/i);
    expect(button).toBeInTheDocument();
    expect(btnId).toBeInTheDocument();
  });
});

describe('2 - Check login page inputs and button validation', () => {
  test('Button to be disabled', () => {
    renderWithRouter(<App />, '/');
    const button = screen.getByTestId(LOGIN_SUBMIT_BTN);
    expect(button).toBeDisabled();
  });

  test('Input only receive a valid email', () => {
    renderWithRouter(<App />, '/');
    const email = screen.getByPlaceholderText(EMAIL_PLACEHOLDER);
    const password = screen.getByPlaceholderText(PASSWORD_PLACEHOLDER);
    const btnId = screen.getByTestId(LOGIN_SUBMIT_BTN);

    userEvent.type(email, 'email.com');
    userEvent.type(password, VALID_PASSWORD);
    expect(btnId).toBeDisabled();

    userEvent.type(email, 'name@com@');
    userEvent.type(password, VALID_PASSWORD);
    expect(btnId).toBeDisabled();

    userEvent.type(email, 'name.com@');
    userEvent.type(password, VALID_PASSWORD);
    expect(btnId).toBeDisabled();

    userEvent.type(email, 'name@email.');
    userEvent.type(password, VALID_PASSWORD);
    expect(btnId).toBeDisabled();
  });

  test('Input only receive a valid password', () => {
    renderWithRouter(<App />, '/');
    const email = screen.getByPlaceholderText(EMAIL_PLACEHOLDER);
    const password = screen.getByPlaceholderText(PASSWORD_PLACEHOLDER);
    const btnId = screen.getByTestId(LOGIN_SUBMIT_BTN);
    userEvent.type(email, VALID_EMAIL);
    userEvent.type(password, '12345');
    expect(btnId).toBeDisabled();
  });

  test('Check button to be enabled', () => {
    renderWithRouter(<App />, '/');
    const email = screen.getByTestId(EMAIL_INPUT);
    const password = screen.getByTestId(PASSWORD_INPUT);
    const btnId = screen.getByTestId(LOGIN_SUBMIT_BTN);
    userEvent.type(email, VALID_EMAIL);
    userEvent.type(password, VALID_PASSWORD);
    expect(btnId).not.toBeDisabled(); // toBeEnabled
  });
});

describe('3 - Check Local  and Route', () => {
  test('Local Storage MealsToken key and route \'comidas\'', () => {
    const { history } = renderWithRouter(<App />, '/');
    const email = screen.getByTestId(EMAIL_INPUT);
    const password = screen.getByTestId(PASSWORD_INPUT);
    const btnId = screen.getByTestId(LOGIN_SUBMIT_BTN);
    userEvent.type(email, VALID_EMAIL);
    userEvent.type(password, VALID_PASSWORD);
    fireEvent.click(btnId);
    expect(localStorage.getItem(LOCAL_STORAGE_MEALSTOKEN_KEY)).not.toBeNull();
    expect(history.location.pathname).toBe('/comidas');
  });

  test('Local Storage CocktailsToken keyand and route \'comidas\'', () => {
    const { history } = renderWithRouter(<App />, '/');
    const email = screen.getByTestId(EMAIL_INPUT);
    const password = screen.getByTestId(PASSWORD_INPUT);
    const btnId = screen.getByTestId(LOGIN_SUBMIT_BTN);
    userEvent.type(email, VALID_EMAIL);
    userEvent.type(password, VALID_PASSWORD);
    fireEvent.click(btnId);
    expect(localStorage.getItem(LOCAL_STORAGE_COCKTAILSTOKEN_KEY)).not.toBeNull();
    expect(history.location.pathname).toBe('/comidas');
  });

  test('Local Storage User key and route \'comidas\'', () => {
    const { history } = renderWithRouter(<App />, '/');
    const email = screen.getByTestId(EMAIL_INPUT);
    const password = screen.getByTestId(PASSWORD_INPUT);
    const btnId = screen.getByTestId(LOGIN_SUBMIT_BTN);
    userEvent.type(email, VALID_EMAIL);
    userEvent.type(password, VALID_PASSWORD);
    fireEvent.click(btnId);
    expect(localStorage.getItem(LOCAL_STORAGE_USER_KEY)).toContain(email.value);
    expect(history.location.pathname).toBe('/comidas');
  });
});
