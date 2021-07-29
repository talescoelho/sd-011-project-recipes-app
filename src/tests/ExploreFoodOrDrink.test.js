import React from 'react';
import { render, screen } from '@testing-library/react';
import ExploreFoodOrDrink from '../pages/ExploreFoodOrDrink';

it('basic test', () => {
  render(<ExploreFoodOrDrink />);

  expect(screen.getByText(/Tela de Explorar Bebidas ou Comidas/i)).toBeInTheDocument();
});
