import React from 'react';
import render from '../helpers/renderWithRouterAndStore';
import { RecipesMade } from '../pages';

describe('Pagina de Receitas Feitas', () => {
  it('Elementos do Header', () => {
    const { getByTestId } = render(<RecipesMade />);
    expect(getByTestId('page-title')).toBeInTheDocument();
    expect(getByTestId('profile-top-btn')).toBeInTheDocument();
    expect(getByTestId('search-top-btn')).toBeInTheDocument();
  });
});
