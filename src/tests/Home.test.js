import React from 'react';
import renderWithRouter from '../Router/renderWithRouter';
import Home from '../Pages/Home';

test('Farewell, front-end', () => {
  const { getByText } = renderWithRouter(<Home />);
  const linkElement = getByText(/TRYBE/i);
  expect(linkElement).toBeInTheDocument();
});
