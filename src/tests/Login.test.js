import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Login from '../pages/Login';

describe('Requirement 02', () => {
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

describe('Requirement 03', () => {
  it('should be able to type an email', () => {
    render(<Login />);
    const inputEmail = screen.getByTestId('email-input');
    fireEvent.change(inputEmail, { target: {
      value: 'email@email.com',
      type: 'email',
    } });
    expect(inputEmail.value).toBe('email@email.com');
  });
});

describe('Requirement 04', () => {
  it('should be able to type a password', () => {
    render(<Login />);
    const inputPassword = screen.getByTestId('password-input');
    fireEvent.change(inputPassword, { target: {
      value: '1234567',
      type: 'password',
    } });
    expect(inputPassword.value).toBe('1234567');
  });
});
