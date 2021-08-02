import React from 'react';
import { fireEvent } from '@testing-library/dom';
import HeaderDrinks from '../../Components/headers/HeaderDrinks';
import renderWithRouter from '../renderWithRouter';

describe('Testando o header da page /bebidas', () => {
  it('O título da page está correto?', () => {
    const { getByText } = renderWithRouter(<HeaderDrinks />);
    const title = getByText('Bebidas');
    expect(title).toBeInTheDocument();
  });

  it('O header contém dois botões?', () => {
    const { getAllByRole } = renderWithRouter(<HeaderDrinks />);
    const buttons = getAllByRole(/button/);
    const nButtons = buttons.length;
    expect(nButtons).toBe(Number(2));
  });

  it('O botão de busca faz aparecer a searchBar?', () => {
    const { getByTestId } = renderWithRouter(<HeaderDrinks />);
    const exploreButton = getByTestId('search-top-btn');
    expect(exploreButton).toBeInTheDocument();
    fireEvent.click(exploreButton);
    expect(getByTestId(/search-input/)).toBeInTheDocument();
  });

  it('O botão user redireciona o usuário?', () => {
    const { getByTestId, history } = renderWithRouter(<HeaderDrinks />);
    const userButton = getByTestId('profile-top-btn');
    expect(userButton).toBeInTheDocument();
    fireEvent.click(userButton);
    const url = history.location.pathname;
    expect(url).toBe('/perfil');
  });
});
