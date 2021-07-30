import React from 'react';
import { screen } from '@testing-library/dom';
import render from '../helpers/renderWithRouterAndStore';
import { Login } from '../pages';

describe('Pagina de Login', () => {
  beforeEach(() => {
    render(<Login />);
  });

  it('Falou oi', () => {
    expect(screen.getByText('oi mundo!')).toBeInTheDocument();
  });
});
