import React from 'react';
import render from '../helpers/renderWithRouterAndStore';
import { Perfil } from '../pages';

describe('Pagina de Perfil', () => {
  it('Elementos do Header', () => {
    const { getByTestId } = render(<Perfil />);
    expect(getByTestId('page-title')).toBeInTheDocument();
    expect(getByTestId('profile-top-btn')).toBeInTheDocument();
  });
});
