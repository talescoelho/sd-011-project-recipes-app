import React from 'react';
import HeaderDrinks from '../Components/headers/HeaderDrinks';
import renderWithRouter from './renderWithRouter';

describe('Testando o header da page /bebidas', () => {
  const { getAllByRole, queryByTestId } = renderWithRouter(<HeaderDrinks />);
  it('O header contém dois botões?', () => {
    const buttons = getAllByRole(/button/);
    const nButtons = buttons.length;
    expect(nButtons).toBe(Number(2));
  });

  it('O botão de busca faz aparecer a searchBar?', () => {
    const exploreButton = queryByTestId('profile-top-btn');
    expect(exploreButton).toBeInTheDocument();
  });
});
