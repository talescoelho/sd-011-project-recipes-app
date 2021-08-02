import React from 'react';
import render from '../helpers/renderWithRouterAndStore';
import { FoodExplore } from '../pages';

describe('Pagina de Receitas Favoritas', () => {
  it('Elementos do Header', () => {
    const { getByTestId } = render(<FoodExplore />);
    expect(getByTestId('page-title')).toBeInTheDocument();
    expect(getByTestId('profile-top-btn')).toBeInTheDocument();
    expect(getByTestId('search-top-btn')).toBeInTheDocument();
  });
});
