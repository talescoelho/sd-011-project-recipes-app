import { fireEvent } from '@testing-library/react';
import React from 'react';
import Routes from '../Routes';
import renderWithReduxAndRouter from './renderWithReduxAndRouter';

describe('Testes da tela de detalhes', () => {
  it('A rota da tela de detalhes', () => {
    const { history, getByText } = renderWithReduxAndRouter(<Routes />);
    const { pathname } = history.location;

    expect(pathname).toBe('/');

    const loginText = getByText(/Login/i);

    expect(loginText).toBeInTheDocument();
  });

}