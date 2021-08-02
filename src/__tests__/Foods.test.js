import React from 'react';
import render from '../helpers/renderWithRouterAndStore';
import { Foods } from '../pages';

describe('Pagina de Comidas', () => {
  it('Elementos do Header', () => {
    const { getByTestId } = render(<Foods />);
    expect(getByTestId('page-title')).toBeInTheDocument();
    expect(getByTestId('profile-top-btn')).toBeInTheDocument();
    expect(getByTestId('search-top-btn')).toBeInTheDocument();
  });
});
