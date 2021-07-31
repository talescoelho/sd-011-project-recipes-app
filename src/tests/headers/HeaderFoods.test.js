import React from 'react';
import { fireEvent } from '@testing-library/dom';
import HeaderFoods from '../../Components/headers/HeaderFoods';
import renderWithRouter from '../renderWithRouter';

describe('Testando o header da page /comidas', () => {
  it('O título da page está correto?', () => {
    const { getByText } = renderWithRouter(<HeaderFoods />);
    const title = getByText('Comidas');
    expect(title).toBeInTheDocument();
  });

  it('O header contém dois botões?', () => {
    const { getAllByRole } = renderWithRouter(<HeaderFoods />);
    const buttons = getAllByRole(/button/);
    const nButtons = buttons.length;
    expect(nButtons).toBe(Number(2));
  });

  it('O botão de busca faz aparecer a searchBar?', () => {
    const { getByTestId } = renderWithRouter(<HeaderFoods />);
    const exploreButton = getByTestId('search-top-btn');
    expect(exploreButton).toBeInTheDocument();
    fireEvent.click(exploreButton);
    expect(getByTestId(/search-input/)).toBeInTheDocument();
  });

  it('O botão user redireciona o usuário?', () => {
    const { getByTestId, history } = renderWithRouter(<HeaderFoods />);
    const userButton = getByTestId('profile-top-btn');
    expect(userButton).toBeInTheDocument();
    fireEvent.click(userButton);
    const url = history.location.pathname;
    expect(url).toBe('/perfil');
  });
});
