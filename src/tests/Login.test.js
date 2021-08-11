import React from 'react';
import { cleanup, fireEvent } from '@testing-library/react';
import Login from '../pages/Login';
import App from '../App';
import renderWithRouter from './renderWithRouter';

const localStorageMock = {
  getItem: jest.fn(),
  setItem: jest.fn(),
  clear: jest.fn(),
};
global.localStorage = localStorageMock;

describe('Testando a página de Login', () => {
  const { getByTestId } = renderWithRouter(<Login />);
  const emailInput = getByTestId('email-input');
  const passwordInput = getByTestId('password-input');
  const btn = getByTestId('login-submit-btn');

  afterEach(cleanup);

  const emailTest = 'alguem@alguem.com';

  it('Verifica se tem os dois inputs e o botão', () => {
    expect(emailInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
    expect(btn).toBeInTheDocument();
  });

  it('Verifica se é possível escrever o email', () => {
    fireEvent.change(emailInput, { target: { value: emailTest } });
    expect(emailInput.value).toEqual(emailTest);
  });

  it('Verifica se é possível escrever a senha', () => {
    fireEvent.change(passwordInput, { target: { value: '1234567' } });
    expect(passwordInput.value).toEqual('1234567');
  });

  it('Verifica se o botão é habilitado quando são digitados email e senha corretos',
    () => {
      const { getByText } = renderWithRouter(<Login />);
      const email = getByTestId('email-input');
      const password = getByTestId('password-input');
      const btnTest = getByText('Entrar');

      fireEvent.change(email, { target: { value: emailTest } });
      fireEvent.change(password, { target: { value: '1234567' } });

      expect(email.value).toEqual(emailTest);
      expect(password.value).toEqual('1234567');
      expect(btnTest).not.toBeDisabled();
    });

  it('Verifica se o botão é desabilitado quando são digitados email e senha incorretos',
    () => {
      fireEvent.change(emailInput, { target: { value: emailTest } });
      fireEvent.change(passwordInput, { target: { value: '123' } });

      expect(btn).toBeDisabled();
    });

  it('Verifica se salva no localStorage a chave mealsToken e cocktailsToken', () => {
    const { getByLabelText, getByText } = renderWithRouter(<Login />);
    const email = getByLabelText('Email:');
    const password = getByLabelText('Senha:');
    const btnTest = getByText('Entrar');

    expect(localStorage.getItem('mealsToken')).toBe(null);
    expect(localStorage.getItem('cocktailsToken')).toBe(null);

    fireEvent.change(email, { target: { value: emailTest } });
    fireEvent.change(password, { target: { value: '1234567' } });

    fireEvent.click(btnTest);

    expect(localStorage.getItem('mealsToken')).toBe('1');
    expect(localStorage.getItem('cocktailsToken')).toBe('1');
  });

  it('Verifica se salva o email do usuário no localStorage', () => {
    const { getByLabelText, getByText } = renderWithRouter(<Login />);
    const email = getByLabelText('Email:');
    const password = getByLabelText('Senha:');
    const btnTest = getByText('Entrar');
    localStorage.clear();

    expect(localStorage.getItem('user')).toBe(null);

    fireEvent.change(email, { target: { value: emailTest } });
    fireEvent.change(password, { target: { value: '1234567' } });

    fireEvent.click(btnTest);

    expect(JSON.parse(localStorage.getItem('user')))
      .toStrictEqual({ email: `${emailTest}` });
  });

  it('Verifica se direciona o usuário para a tela principal ao clicar no botão',
    async () => {
      const { getByLabelText, getByText } = renderWithRouter(<App />);
      const email = getByLabelText('Email:');
      const password = getByLabelText('Senha:');
      const btnTest = getByText('Entrar');

      fireEvent.change(email, { target: { value: emailTest } });
      fireEvent.change(password, { target: { value: '1234567' } });
      expect(btnTest).not.toBeDisabled();

      fireEvent.click(btnTest);

      expect(getByText('Comidas')).toBeInTheDocument();
    });
});
