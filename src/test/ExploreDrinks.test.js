import React from 'react';
import { fireEvent } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import ExplorarBebidas from '../pages/explorar/bebidas';
import renderWithRouterAndStore from './testConfig';

const history = createMemoryHistory({ initialEntries: ['/'] });

describe('Testa a página ExplorarBebidas', () => {
  it('Tem o botão Por Ingredientes', () => {
    const { getByTestId } = renderWithRouterAndStore(<ExplorarBebidas />);
    const btnByIngredients = getByTestId('explore-by-ingredient');
    expect(btnByIngredients).toBeInTheDocument();
  });

  it('Tem o botão Me Surpreenda!', () => {
    const { getByTestId } = renderWithRouterAndStore(<ExplorarBebidas />);
    const btnSurpriseMe = getByTestId('explore-surprise');
    expect(btnSurpriseMe).toBeInTheDocument();
  });

  it('Tem apenas dois botões na página', () => {
    const { getAllByRole } = renderWithRouterAndStore(<ExplorarBebidas />);
    const buttons = getAllByRole('button');
    expect(buttons[0].innerHTML).toBe('Por Ingredientes');
    expect(buttons[1].innerHTML).toBe('Me Surpreenda');
  });

  it('Redireciona para a página BebidasIngredientes', () => {
    const { history } = renderWithRouterAndStore(<ExplorarBebidas />, history);
    const buttons = getAllByRole('button');
    expect(buttons[0].innerHTML).toBe('Por Ingredientes');
    expect(buttons[1].innerHTML).toBe('Me Surpreenda');
  });
});
