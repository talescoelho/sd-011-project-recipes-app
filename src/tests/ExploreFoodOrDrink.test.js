import React from 'react';
import { render, screen } from '@testing-library/react';
// import ExploreFoodOrDrink from '../pages/ExploreFoodOrDrink';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import App from '../App';

it('basic test', () => {
  // render(<ExploreFoodOrDrink />);
  const history = createMemoryHistory();
  render(
    <Router history={ history }>
      <App />
    </Router>,
  );
  history.push('/explorar/comidas');
  expect(screen.getByText(/Tela de Explorar Comidas/i)).toBeInTheDocument();
  history.push('/explorar/bebidas');
  expect(screen.getByText(/Tela de Explorar Bebidas/i)).toBeInTheDocument();
});
