import React from 'react';
import { screen } from '@testing-library/dom';
import render from '../helpers/renderWithRouterAndStore';
import { Button } from '../components/design';

describe('O component Button', () => {
  beforeEach(() => {
    render(<Button><h1>h1</h1></Button>);
  });
  it('Não e do tipo submit', () => {
    const { getByRole } = screen;
    expect(getByRole('button').type).toBe('button');
  });
});

describe('O component Button', () => {
  beforeEach(() => {
    render(<Button variant isSubmit><h1>h1</h1></Button>);
  });
  it('É do tipo submit', () => {
    const { getByRole } = screen;
    expect(getByRole('button').type).toBe('submit');
  });
});
