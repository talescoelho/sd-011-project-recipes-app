import React from 'react';
import { render, screen } from '@testing-library/react';
import Login from '../pages/Login';

describe('Requisto 02', () => {
  it('should have an email input', () => {
    render(<Login />);

    expect(screen.getByTestId('email-input')).toBeInTheDocument();
  });

  it('should have an password input', () => {
    render(<Login />);

    expect(screen.getByTestId('password-input')).toBeInTheDocument();
  });

  it('should have a button with text "Entrar"', () => {
    render(<Login />);

    const submitButton = screen.getByTestId('login-submit-btn');

    expect(submitButton).toBeInTheDocument();
    expect(submitButton).toHaveTextContent('Entrar');
  });
});
