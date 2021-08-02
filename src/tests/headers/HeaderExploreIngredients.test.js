import React from 'react';
import { fireEvent } from '@testing-library/dom';
import HeaderExploreIngredients from '../../Components/headers/HeaderExploreIngredients';
import renderWithRouter from '../renderWithRouter';

describe('Testando o header da page /explorar/bebidas/ingredientes', () => {
  it('O título da page está correto?', () => {
    const { getByText } = renderWithRouter(<HeaderExploreIngredients />);
    const title = getByText('Explorar Ingredientes');
    expect(title).toBeInTheDocument();
  });

  it('O header contém um botão?', () => {
    const { getAllByRole } = renderWithRouter(<HeaderExploreIngredients />);
    const buttons = getAllByRole(/button/);
    const nButtons = buttons.length;
    expect(nButtons).toBe(Number(1));
  });

  it('O botão user redireciona o usuário?', () => {
    const { getByTestId, history } = renderWithRouter(<HeaderExploreIngredients />);
    const userButton = getByTestId('profile-top-btn');
    expect(userButton).toBeInTheDocument();
    fireEvent.click(userButton);
    const url = history.location.pathname;
    expect(url).toBe('/perfil');
  });
});
