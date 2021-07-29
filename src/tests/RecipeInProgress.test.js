import React from 'react';
import { render, screen } from '@testing-library/react';
import RecipeInProgress from '../pages/RecipeInProgress';

it('basic test', () => {
  render(<RecipeInProgress />);

  expect(screen.getByText(/Tela de Receita em Progresso/i)).toBeInTheDocument();
});
