import React from 'react';
import { fireEvent } from '@testing-library/dom';
import HeaderExploreDrinks from '../../Components/headers/HeaderExploreDrinks';
import renderWithRouter from '../renderWithRouter';

describe('Testando o header da page /explorar/bebidas', () => {
  it('O título da page está correto?', () => {
    const { getByText } = renderWithRouter(<HeaderExploreDrinks />);
    const title = getByText('Explorar Bebidas');
    expect(title).toBeInTheDocument();
  });

  it('O header contém um botão?', () => {
    const { getAllByRole } = renderWithRouter(<HeaderExploreDrinks />);
    const buttons = getAllByRole(/button/);
    const nButtons = buttons.length;
    expect(nButtons).toBe(Number(1));
  });

  it('O botão user redireciona o usuário?', () => {
    const { getByTestId, history } = renderWithRouter(<HeaderExploreDrinks />);
    const userButton = getByTestId('profile-top-btn');
    expect(userButton).toBeInTheDocument();
    fireEvent.click(userButton);
    const url = history.location.pathname;
    expect(url).toBe('/perfil');
  });
});
