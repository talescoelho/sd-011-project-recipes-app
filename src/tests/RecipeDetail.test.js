import React from 'react';
import { render, screen } from '@testing-library/react';
import RecipeDetail from '../pages/RecipeDetail';

it('basic test', () => {
  render(<RecipeDetail />);

  expect(screen.getByText(/Tela de Detalhes de uma Receita/i)).toBeInTheDocument();
});
