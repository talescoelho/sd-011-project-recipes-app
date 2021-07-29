import React from 'react';
import { fireEvent, render } from '@testing-library/react';
// import App from '../App';
import Login from '../Pages/Login';

const EMAIL_INPUT = 'email-input';
const PASS_INPUT = 'password-input';
const LOGIN_BUTTON = 'login-submit-btn';

describe('Verificações da tela de Login', () => {
  it('Verifica se há dois inputs na tela de Login', () => {
    const { getByTestId } = render(<Login />);
    const emailInput = getByTestId(EMAIL_INPUT);
    const passwordInput = getByTestId(PASS_INPUT);
    expect(emailInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
  });

  it('Verifica se há um botão de login na tela de Login', () => {
    const { getByTestId } = render(<Login />);
    const loginButton = getByTestId(LOGIN_BUTTON);
    expect(loginButton).toBeInTheDocument();
  });

  it('Verifica se o botão desabilita quando informações errada são inseridas', () => {
    const { getByTestId } = render(<Login />);

    const emailInput = getByTestId(EMAIL_INPUT);
    const passwordInput = getByTestId(PASS_INPUT);
    const loginButton = getByTestId(LOGIN_BUTTON);

    fireEvent.change(emailInput, { target: { value: 'grupo33' } });
    fireEvent.change(passwordInput, { target: { value: '33' } });
    expect(loginButton).toBeDisabled();
  });

  it('Verifica se o botão habilita quando informações corretas são inseridas', () => {
    const { getByTestId } = render(<Login />);

    const emailInput = getByTestId(EMAIL_INPUT);
    const passwordInput = getByTestId(PASS_INPUT);
    const loginButton = getByTestId(LOGIN_BUTTON);

    fireEvent.change(emailInput, { target: { value: 'email@betrybe.com' } });
    fireEvent.change(passwordInput, { target: { value: 'senhaSegura123' } });
    expect(loginButton).not.toBeDisabled();
  });
});
