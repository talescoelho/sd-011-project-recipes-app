import React from 'react';
import { cleanup, render } from '@testing-library/react';
import App from './App';
import Login from './Pages/Login';

describe('Farewell, front-end', () => {
  // afterEach(() => {
  //   cleanup();
  // });


  it('should display Trybe title on rendering', () => {
    const { getByText } = render(<App />);
    const linkElement = getByText(/TRYBE/i);
    expect(linkElement).toBeInTheDocument();
  });

  it('should display inputs and button on App rendering', () => {
    const { getByLabelText, getByTestId } = render(<App />);
    const emailInput = getByLabelText(/Email:/i);
    const passwordInput = getByLabelText(/Senha:/i);
    // const btnNode = getByTestId('login-submit-btn');
    expect(emailInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
    // expect(btnNode).toBeInTheDocument();
  });
});
