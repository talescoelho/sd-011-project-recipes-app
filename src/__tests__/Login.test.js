import React from 'react';
import render from '../helpers/renderWithRouterAndStore';
import { Login } from '../pages';

describe('Pagina de Login', () => {
  it('Falou oi', () => {
    const { getByText } = render(<Login />);
    expect(getByText('oi mundo!')).toBeInTheDocument();
  });
});
