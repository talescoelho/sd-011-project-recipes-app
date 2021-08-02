import React from 'react';
import { render, screen } from '@testing-library/react';
import Recipes from '../pages/Recipes';

describe('Requeriment 09', () => {
  it('Should have "profile button" on screen', () => {
    render(<Recipes />);
    expect(screen.getByTestId('profile-top-btn')).toBeInTheDocument();
  });

  it('Should have "search button" on screen', () => {
    render(<Recipes />);
    expect(screen.getByTestId('search-top-btn')).toBeInTheDocument();
  });
});
