import React from 'react';
import { render, screen } from '@testing-library/react';
import Footer from '../components/Footer';

describe('Requirement 19 ', () => {
  it('should have elements in the footer with specific data-testid', () => {
    render(<Footer />);
    expect(screen.getByTestId('footer')).toBeInTheDocument();
    expect(screen.getByTestId('drinks-bottom-btn')).toBeInTheDocument();
    expect(screen.getByTestId('explore-bottom-btn')).toBeInTheDocument();
    expect(screen.getByTestId('food-bottom-btn')).toBeInTheDocument();
  });
});
