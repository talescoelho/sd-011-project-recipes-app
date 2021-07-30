import React from 'react';
import { fireEvent } from '@testing-library/react';
import Login from '../Pages/Login';
import renderWithRouter from './renderWithRouter';

const EMAIL_INPUT = 'email-input';
const PASS_INPUT = 'password-input';
const LOGIN_BUTTON = 'login-submit-btn';

describe('', () => {
  it('Verifica o texto da tela de comidas.', async () => {
    const { getByTestId, findByText } = renderWithRouter(<Login />);

    const emailInput = getByTestId(EMAIL_INPUT);
    const passwordInput = getByTestId(PASS_INPUT);
    const loginButton = getByTestId(LOGIN_BUTTON);

    fireEvent.change(emailInput, { target: { value: 'email@betrybe.com' } });
    fireEvent.change(passwordInput, { target: { value: 'senhaSegura123' } });

    fireEvent.click(loginButton);

    const AAAText = await findByText(/Vinicius Gouveia/);
    expect(AAAText[0]).toBeInTheDocument();
  });
});
