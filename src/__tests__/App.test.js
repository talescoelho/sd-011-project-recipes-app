import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import render from '../helpers/renderWithRouterAndStore';
import App from '../App';

describe('O App', () => {
  it('Renderiza as Todos rotas', () => {
    render(<App />, { wrapper: MemoryRouter });
  });
});
