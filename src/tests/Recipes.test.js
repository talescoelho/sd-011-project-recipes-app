import React from 'react';
import { render, screen } from '@testing-library/react';
import Recipes from '../pages/Recipes';

it('basic test', () => {
  render(<Recipes />);

  expect(screen.getByText(/Tela Principal de Receitas/i)).toBeInTheDocument();
});
