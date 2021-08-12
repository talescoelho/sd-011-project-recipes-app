import React from 'react';
import { render } from '@testing-library/react';
import NotFound from '../components/NotFound';

it('Testa Página Not Found', () => {
  const { getByText } = render(<NotFound />);
  const text = getByText(/not/i);
  expect(text).toBeInTheDocument();
});
