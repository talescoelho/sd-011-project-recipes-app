import React from 'react';
import { render, screen } from '@testing-library/react';
import Explore from '../pages/Explore';

it('basic test', () => {
  render(<Explore />);

  expect(screen.getByText(/Tela de Explorar/i)).toBeInTheDocument();
});
