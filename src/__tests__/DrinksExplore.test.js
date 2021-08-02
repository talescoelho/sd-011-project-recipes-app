import React from 'react';
import render from '../helpers/renderWithRouterAndStore';
import { Drinks } from '../pages';

describe('Pagina de Explorar Bebidas', () => {
  it('Elementos do Header', () => {
    const { getByTestId } = render(<Drinks />);
    expect(getByTestId('page-title')).toBeInTheDocument();
    expect(getByTestId('profile-top-btn')).toBeInTheDocument();
    expect(getByTestId('search-top-btn')).toBeInTheDocument();
  });
});
