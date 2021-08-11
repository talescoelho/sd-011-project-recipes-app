import React from 'react';
import { fireEvent } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import Login from '../pages/login';
import renderWithRouterAndStore from './testConfig';

const history = createMemoryHistory({ initialEntries: ['/'] });

const EMAIL_INPUT_TEST_ID = 'email-input';
const PASSWORD_INPUT_TEST_ID = 'password-input';
const BUTTON_INPUT_TEST_ID = 'login-submit-btn';

// afterEach(() => jest.clearAllMocks());

describe('Crie uma página inicial de login', () => {
  // CAMPO EMAIL
  test('A pagina deve ter o campo de email', () => {
    const { getByTestId } = renderWithRouterAndStore(<Login
      history={ history }
    />, history);
    const inputEmail = getByTestId(EMAIL_INPUT_TEST_ID);
    expect(inputEmail).toBeInTheDocument();
    expect(inputEmail).toHaveValue('');
  });

  test('Testando o campo de email', () => {
    const { getByTestId } = renderWithRouterAndStore(<Login history={ history } />);
    const TEST_EMAIL = 'email@email.com';

    const inputEmail = getByTestId(EMAIL_INPUT_TEST_ID);
    expect(inputEmail).toHaveValue('');

    fireEvent.change(inputEmail, { target: { value: TEST_EMAIL } });
    expect(inputEmail).toHaveValue(TEST_EMAIL);
  });

  // CAMPO SENHA
  test('A pagina deve ter o campo de senha', () => {
    const { getByTestId } = renderWithRouterAndStore(<Login history={ history } />);
    const inputSenha = getByTestId(PASSWORD_INPUT_TEST_ID);
    expect(inputSenha).toBeInTheDocument();
    expect(inputSenha).toHaveValue('');
  });

  test('Testando o campo de senha valida', () => {
    const { getByTestId } = renderWithRouterAndStore(<Login history={ history } />);
    const TEST_PASS = '123456';

    const inputSenha = getByTestId(PASSWORD_INPUT_TEST_ID);
    expect(inputSenha).toHaveValue('');

    fireEvent.change(inputSenha, { target: { value: TEST_PASS } });
    expect(inputSenha).toHaveValue(TEST_PASS);
  });

  // BUTTON
  test('Testando o botao Login com email invalido', () => {
    const { getByTestId } = renderWithRouterAndStore(<Login history={ history } />);
    const TEST_EMAIL = 'a.com';

    const inputEmail = getByTestId(EMAIL_INPUT_TEST_ID);
    fireEvent.change(inputEmail, { target: { value: TEST_EMAIL } });

    const inputButton = getByTestId(BUTTON_INPUT_TEST_ID);
    expect(inputButton.getAttribute('disabled')).not.toBeNull();
  });

  test('Testando o botao Login com senha invalida', () => {
    const { getByTestId } = renderWithRouterAndStore(<Login history={ history } />);
    const TEST_SENHA = '1';

    const inputSenha = getByTestId(PASSWORD_INPUT_TEST_ID);
    fireEvent.change(inputSenha, { target: { value: TEST_SENHA } });

    const inputButton = getByTestId(BUTTON_INPUT_TEST_ID);
    expect(inputButton.getAttribute('disabled')).not.toBeNull();
  });

  test('Testando o botao Login com email/senha validos', () => {
    const { getByTestId } = renderWithRouterAndStore(<Login history={ history } />);
    const TEST_SENHA = '1234567';
    const TEST_EMAIL = 'email@valido.com.br';

    const inputEmail = getByTestId(EMAIL_INPUT_TEST_ID);
    const inputSenha = getByTestId(PASSWORD_INPUT_TEST_ID);

    fireEvent.change(inputEmail, { target: { value: TEST_EMAIL } });
    fireEvent.change(inputSenha, { target: { value: TEST_SENHA } });

    const inputButton = getByTestId(BUTTON_INPUT_TEST_ID);
    expect(inputButton.getAttribute('disabled')).toBe(null);
  });

  test('Testando o submit', () => {
    const { getByTestId } = renderWithRouterAndStore(<Login history={ history } />);
    const TEST_SENHA = '1234567';
    const TEST_EMAIL = 'email@valido.com.br';
    const inputEmail = getByTestId(EMAIL_INPUT_TEST_ID);
    const inputSenha = getByTestId(PASSWORD_INPUT_TEST_ID);
    const inputButton = getByTestId(BUTTON_INPUT_TEST_ID);
    fireEvent.change(inputEmail, { target: { value: TEST_EMAIL } });
    fireEvent.change(inputSenha, { target: { value: TEST_SENHA } });
    fireEvent.click(inputButton);
  });

  // @TODO TEST com LocalStorage usando jest mock
  // @TODO TEST com o submit
});
