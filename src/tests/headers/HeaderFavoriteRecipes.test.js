import React from 'react';
import { fireEvent } from '@testing-library/dom';
import HeaderFavoriteRecipes from '../../Components/headers/HeaderFavoriteRecipes';
import renderWithRouter from '../renderWithRouter';

describe('Testando o header da page /receitas-favoritas', () => {
  it('O título da page está correto?', () => {
    const { getByText } = renderWithRouter(<HeaderFavoriteRecipes />);
    const title = getByText('Receitas Favoritas');
    expect(title).toBeInTheDocument();
  });

  it('O header contém um botão?', () => {
    const { getAllByRole } = renderWithRouter(<HeaderFavoriteRecipes />);
    const buttons = getAllByRole(/button/);
    const nButtons = buttons.length;
    expect(nButtons).toBe(Number(1));
  });

  it('O botão user redireciona o usuário?', () => {
    const { getByTestId, history } = renderWithRouter(<HeaderFavoriteRecipes />);
    const userButton = getByTestId('profile-top-btn');
    expect(userButton).toBeInTheDocument();
    fireEvent.click(userButton);
    const url = history.location.pathname;
    expect(url).toBe('/perfil');
  });
});
