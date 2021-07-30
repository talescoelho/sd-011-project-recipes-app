import { fireEvent } from '@testing-library/react';
import React from 'react';
import Routes from '../Routes';
import renderWithReduxAndRouter from './renderWithReduxAndRouter';

const invalidEmail = 'teste.teste';
const validEmail = 'teste@test.com';
const invalidPassword = '123456';
const validPassword = '1234567';

describe('Testes da tela de login', () => {
  it('A rota inicial é a tela de login', () => {
    const { history, getByText } = renderWithReduxAndRouter(<Routes />);
    const { pathname } = history.location;
    expect(pathname).toBe('/');
    const loginText = getByText(/Login/i);
    expect(loginText).toBeInTheDocument();
  });
  it('É possui digitar o email e a senha', () => {
    const { getByTestId } = renderWithReduxAndRouter(<Routes />);
    const passwordInput = getByTestId('password-input');
    const emailInput = getByTestId('email-input');
    fireEvent.change(emailInput, { target: { value: invalidEmail } });
    fireEvent.change(passwordInput, { target: { value: validPassword } });
    expect(emailInput).toHaveValue(invalidEmail);
    expect(passwordInput).toHaveValue(validPassword);
  });
  it('Botão de login se torna ativo com email e senha válida', () => {
    const { getByTestId, history } = renderWithReduxAndRouter(<Routes />);
    const passwordInput = getByTestId('password-input');
    const emailInput = getByTestId('email-input');
    const loginButton = getByTestId('login-submit-btn');
    expect(loginButton).toBeDisabled();
    fireEvent.change(emailInput, { target: { value: invalidEmail } });
    fireEvent.change(passwordInput, { target: { value: validPassword } });
    expect(loginButton).toBeDisabled();
    fireEvent.change(emailInput, { target: { value: validEmail } });
    fireEvent.change(passwordInput, { target: { value: invalidPassword } });
    expect(loginButton).toBeDisabled();
    fireEvent.change(emailInput, { target: { value: validEmail } });
    fireEvent.change(passwordInput, { target: { value: validPassword } });
    expect(loginButton).not.toBeDisabled();
    fireEvent.click(loginButton);
    expect(history.location.pathname).toBe('/comidas');
  });
});
