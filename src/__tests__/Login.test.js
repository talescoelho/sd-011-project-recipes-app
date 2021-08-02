import React from 'react';
import { screen, fireEvent } from '@testing-library/dom';
import render from '../helpers/renderWithRouterAndStore';
import { Login } from '../pages';

const TEST_IDS = {
  email: 'email-input',
  password: 'password-input',
  submitButton: 'login-submit-btn',
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
});
