import React from 'react';
import Explorar from '../pages/explorar';
import renderWithRouterAndStore from './testConfig';

describe('Testa a página Explorar', () => {
  it('Tem o botão Explorar Comidas', () => {
    const { getByTestId } = renderWithRouterAndStore(<Explorar />);
    const btnExploreFoods = getByTestId('explore-food');
    expect(btnExploreFoods).toBeInTheDocument();
  });

  it('Tem o botão Explorar Bebidas', () => {
    const { getByTestId } = renderWithRouterAndStore(<Explorar />);
    const btnExploreDrinks = getByTestId('explore-drinks');
    expect(btnExploreDrinks).toBeInTheDocument();
  });
});
