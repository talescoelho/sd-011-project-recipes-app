import React from 'react';
import render from '../helpers/renderWithRouterAndStore';
import { Comidas } from '../pages';

describe('Pagina de Comidas', () => {
  it('Possui os elementos rederizados na tela: ', () => {
    const { getByTestId } = render(<Comidas />);
    expect(getByTestId('search-input')).toBeInTheDocument();
    expect(getByTestId('ingredient-search-radio')).toBeInTheDocument();
    expect(getByTestId('name-search-radio')).toBeInTheDocument();
    expect(getByTestId('first-letter-search-radio')).toBeInTheDocument();
    expect(getByTestId('exec-search-btn')).toBeInTheDocument();
  });
});
