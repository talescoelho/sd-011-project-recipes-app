import React from 'react';
import { cleanup, render } from '@testing-library/react';
import App from './App';
import userEvent from '@testing-library/user-event';

describe('Farewell, front-end', () => {
  afterEach(() => {
    cleanup();
  });

  it('should display the Login title on rendering', () => {
    const { getByText } = render(<App />);
    const linkElement = getByText(/Login/i);
    expect(linkElement).toBeInTheDocument();
  });

  it('should display inputs and button on App rendering', () => {
    const { getByLabelText, getByTestId } = render(<App />);
    const emailInput = getByLabelText(/Email:/i);
    const passwordInput = getByLabelText(/Senha:/i);
    const btnNode = getByTestId('login-submit-btn');
    expect(emailInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
    expect(btnNode).toBeInTheDocument();
  });
  
  it('should enable the login button when inputs are typed', () => {
    const { getByLabelText, getByTestId } = render(<App />);
    const setLocalStorage = jest.fn();
    const emailInput = getByLabelText(/Email:/i);
    const passwordInput = getByLabelText(/Senha:/i);
    const btnNode = getByTestId('login-submit-btn');
    expect(btnNode).toBeDisabled();
    const mockMail = 'jon@m.com';
    const mockPass = '102384198';
    userEvent.type(emailInput, mockMail);
    userEvent.type(passwordInput, mockPass);
    expect(btnNode).not.toBeDisabled();
    userEvent.click(btnNode);
  });
});
