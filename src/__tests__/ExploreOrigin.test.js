import React from 'react';
import render from '../helpers/renderWithRouterAndStore';
import { ExploreOrigin } from '../pages';

describe('Pagina de Explorar Receitas', () => {
  it('Elementos do Header', () => {
    const { getByTestId } = render(<ExploreOrigin />);
    expect(getByTestId('page-title')).toBeInTheDocument();
    expect(getByTestId('profile-top-btn')).toBeInTheDocument();
    expect(getByTestId('search-top-btn')).toBeInTheDocument();
  });
});
