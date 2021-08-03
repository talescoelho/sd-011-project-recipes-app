import React from 'react';
import { render, screen } from '@testing-library/react';
import Footer from '../components/Footer';
import '@testing-library/jest-dom';

const footer = 'footer';
const drinksBottomBtn = 'drinks-bottom-btn';
const exploreBottomBtn = 'explore-bottom-btn';
const foodBottomBtn = 'food-bottom-btn';

describe('Requirement 19 ', () => {
  it('Should have elements in the footer with specific data-testid', () => {
    render(<Footer />);
    expect(screen.getByTestId(footer)).toBeInTheDocument();
    expect(screen.getByTestId(drinksBottomBtn)).toBeInTheDocument();
    expect(screen.getByTestId(exploreBottomBtn)).toBeInTheDocument();
    expect(screen.getByTestId(foodBottomBtn)).toBeInTheDocument();
  });
});

describe('Requirement 20', () => {
  it('Should have a correct icons', () => {
    render(<Footer />);

    expect(screen.getByTestId(drinksBottomBtn).src).toContain('drinkIcon');
    expect(screen.getByTestId(exploreBottomBtn).src).toContain('exploreIcon');
    expect(screen.getByTestId(foodBottomBtn).src).toContain('mealIcon');
  });
});
