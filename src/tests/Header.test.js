import React from 'react';
import { render, screen } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
// import Recipes from '../pages/Recipes';
import App from '../App';

describe('Requeriment 09', () => {
  it('Header elements should have proper data-testid', () => {
    // render(<Recipes />);
    const history = createMemoryHistory();
    render(
      <Router history={ history }>
        <App />
      </Router>,
    );
    history.push('/comidas');
    expect(screen.getByTestId('profile-top-btn')).toBeInTheDocument();
    expect(screen.getByTestId('search-top-btn')).toBeInTheDocument();
    expect(screen.getByTestId('page-title')).toBeInTheDocument();
  });
});
