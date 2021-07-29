import React from 'react';
import { render } from '@testing-library/react';
// import App from '../App';
import Login from '../Pages/Login';

describe('Verificações da tela de Login', () => {
  it('Verifica se há dois inputs na tela de Login', () => {
    const { getByTestId } = render(<Login />);
    const emailInput = getByTestId('email-input');
    const passwordInput = getByTestId('password-input');

    expect(emailInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
  });

  it('Verifica se há um botão de login na tela de Login', () => {
    const { getByTestId } = render(<Login />);
    const loginButton = getByTestId('login-submit-btn');

    expect(loginButton).toBeInTheDocument();
  });
});
