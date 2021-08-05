import React from 'react';
import { render, screen } from '@testing-library/react';
import Explore from '../pages/Explore';

const exploreFood = 'explore-food';
const exploreDrinks = 'explore-drinks';

describe('Requirement - 67', () => {
  it('Should have elements in the explore page with specific data-testid', () => {
    render(<Explore />);

    expect(screen.getByTestId(exploreFood)).toBeInTheDocument();
    expect(screen.getByTestId(exploreDrinks)).toBeInTheDocument();
  });
});

describe('Requirement - 68', () => {
  it('Should have 2 buttons with names "Explorar Comidas" and "Explorar Bebidas"', () => {
    render(<Explore />);
    expect(screen.getByTestId(exploreFood)).contains('Explorar Comidas');
    expect(screen.getByTestId(exploreDrinks)).contains('Explorar Bebidas');
  });
});
