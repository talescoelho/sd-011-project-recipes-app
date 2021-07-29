import React from 'react';
import { render, screen } from '@testing-library/react';
import ExploreIngredients from '../pages/ExploreIngredients';

it('basic test', () => {
  render(<ExploreIngredients />);

  expect(screen.getByText(/Tela de Explorar Ingredientes/i)).toBeInTheDocument();
});
