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
