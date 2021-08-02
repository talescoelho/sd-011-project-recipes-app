import React from 'react';
import { screen, fireEvent, waitFor } from '@testing-library/dom';
import render from '../helpers/renderWithRouterAndStore';
import { Login } from '../pages';

const TEST_IDS = {
  email: 'email-input',
  password: 'password-input',
  submitButton: 'login-submit-btn',
};

const VALID_LOGIN = {
  email: 'miguel_o_brabo@outlook.com',
  password: 'a91c6d89$#@142977c318a',
};

describe('Pagina de Login', () => {
  beforeEach(() => {
    render(<Login />);
  });

  describe('Possui os campos corretos no formulário', () => {
    it('email', () => {
      expect(screen.getByTestId(TEST_IDS.email)).toBeInTheDocument();
    });

    it('senha', () => {
      expect(screen.getByTestId(TEST_IDS.password)).toBeInTheDocument();
    });

    it('botão de login', () => {
      const button = screen.getByTestId(TEST_IDS.submitButton);
      expect(button).toHaveTextContent('Entrar');
    });
  });

  describe('É possivel preencher os campos', () => {
    it('de email', async () => {
      const input = screen.getByTestId(TEST_IDS.email);
      fireEvent.change(input, { target: { value: 'cris_a_lendaria@gmail.com' } });
      await screen.findByDisplayValue('cris_a_lendaria@gmail.com');
    });

    it('de senha', async () => {
      const input = screen.getByTestId(TEST_IDS.password);
      fireEvent.change(input, { target: { value: '123456789' } });
      await screen.findByDisplayValue('123456789');
    });
  });

  describe('O botão de enviar fica desabilitado', () => {
    it('caso não tenha informação alguma preenchida', () => {
      const button = screen.getByTestId(TEST_IDS.submitButton);
      expect(button).toBeDisabled();
    });

    it('caso o email seja inválido', async () => {
      const emailInput = screen.getByTestId(TEST_IDS.email);
      const passwordInput = screen.getByTestId(TEST_IDS.password);
      fireEvent.change(emailInput, { target: { value: 'joao_rolezeiro@hot' } });
      fireEvent.change(passwordInput, { target: { value: '*h323jnDA08#&*1NADS2ksy2d' } });

      const button = screen.getByTestId(TEST_IDS.submitButton);
      await waitFor(() => expect(button).toBeDisabled());
    });

    it('caso a senha seja inválida', async () => {
      const emailInput = screen.getByTestId(TEST_IDS.email);
      const passwordInput = screen.getByTestId(TEST_IDS.password);
      fireEvent.change(emailInput, { target: { value: 'inacio_o_mago@hotmail.com.br' } });
      fireEvent.change(passwordInput, { target: { value: '123' } });

      const button = screen.getByTestId(TEST_IDS.submitButton);
      await waitFor(() => expect(button).toBeDisabled());
    });
  });

  describe('O botão de enviar torna-se habilitado', () => {
    it('quando ambos os campos são válidos', async () => {
      const emailInput = screen.getByTestId(TEST_IDS.email);
      const passwordInput = screen.getByTestId(TEST_IDS.password);
      fireEvent.change(emailInput, { target: { value: VALID_LOGIN.email } });
      fireEvent.change(passwordInput, { target: { value: VALID_LOGIN.password } });

      const button = screen.getByTestId(TEST_IDS.submitButton);
      await waitFor(() => expect(button).not.toBeDisabled());
    });
  });

  describe('Após fazer login', () => {
    it('salva os tokens no localStorage', async () => {
      const emailInput = screen.getByTestId(TEST_IDS.email);
      const passwordInput = screen.getByTestId(TEST_IDS.password);
      fireEvent.change(emailInput, { target: { value: VALID_LOGIN.email } });
      fireEvent.change(passwordInput, { target: { value: VALID_LOGIN.password } });

      const button = screen.getByTestId(TEST_IDS.submitButton);
      await waitFor(() => expect(button).not.toBeDisabled());

      fireEvent.click(button);

      await waitFor(() => expect(window
        .localStorage.getItem('mealsToken')).toBe('1'));

      await waitFor(() => expect(window
        .localStorage.getItem('cocktailsToken')).toBe('1'));
    });

    it('salva o email no localStorage', async () => {
      const emailInput = screen.getByTestId(TEST_IDS.email);
      const passwordInput = screen.getByTestId(TEST_IDS.password);
      fireEvent.change(emailInput, { target: { value: VALID_LOGIN.email } });
      fireEvent.change(passwordInput, { target: { value: VALID_LOGIN.password } });

      const button = screen.getByTestId(TEST_IDS.submitButton);
      await waitFor(() => expect(button).not.toBeDisabled());

      fireEvent.click(button);

      const expectedStrg = JSON.stringify({ email: VALID_LOGIN.email });

      await waitFor(() => expect(window.localStorage.getItem('user')).toBe(expectedStrg));
    });
  });
});
