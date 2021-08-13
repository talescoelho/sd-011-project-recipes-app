import React from 'react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import renderWithRouterAndContext from './renderWithRouterAndContext';

const EMAIL_INPUT = 'alguem@alguem.com';
const PASSWORD_INPUT = '1234567';

describe('Tests relacted by Footer component', () => {
  it('Implemente os elementos do menu inferior respeitando os atributos descritos no protótipo', () => {
    const { getByTestId, history } = renderWithRouterAndContext(<App />);
    userEvent.type(getByTestId('email-input'), EMAIL_INPUT);
    userEvent.type(getByTestId('password-input'), PASSWORD_INPUT);
    userEvent.click(getByTestId('login-submit-btn'));

    history.push('/comidas');

    expect(window.location.pathname).toBe('/comidas');
  })
})