import React from 'react';
import { cleanup } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import { renderWithRouter } from '../Services/Data';


describe('Tests the login component', () => {
  afterEach(() => {
    cleanup();
  });

  it('should display the Login title on rendering', () => {

    const { getByText } = renderWithRouter(<App />);
    const linkElement = getByText(/Login/i);
    expect(linkElement).toBeInTheDocument();
  });

  it('should display inputs and button on App rendering', () => {
    const { getByLabelText, getByTestId } = renderWithRouter(<App />);
    const emailInput = getByLabelText(/Email:/i);
    const passwordInput = getByLabelText(/Senha:/i);
    const btnNode = getByTestId('login-submit-btn');
    expect(emailInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
    expect(btnNode).toBeInTheDocument();
  });
  
  it('should enable the login button when inputs are typed', () => {
    const { getByLabelText, getByTestId } = renderWithRouter(<App />);
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

    // tests 1 line on the header component
    const serachBtn = getByTestId('search-top-btn');
    userEvent.click(serachBtn);
  });
});

// describe('Tests the Recipes component', () => {
//   afterEach(() => {
//     cleanup();
//   });

//   it('should display the Comidas title on rendering', () => {
//     const { getByLabelText, getByText } = render(<App />);

//     // const emailInput = getByLabelText(/Email:/i);
//     // const passwordInput = getByLabelText(/Senha:/i);
//     // const btnNode = getByTestId('login-submit-btn');
//     // const mockMail = 'jon@m.com';
//     // const mockPass = '102384198';
//     // userEvent.type(emailInput, mockMail);
//     // userEvent.type(passwordInput, mockPass);
//     // userEvent.click(btnNode);
//     const linkElement = getByText(/Comidas/i);
//     expect(linkElement).toBeInTheDocument();
//   });

//   // it('should display inputs and button on App rendering', () => {
//   //   const { getByLabelText, getByTestId } = render(<App />);
//   //   const emailInput = getByLabelText(/Email:/i);
//   //   const passwordInput = getByLabelText(/Senha:/i);
//   //   const btnNode = getByTestId('login-submit-btn');
//   //   expect(emailInput).toBeInTheDocument();
//   //   expect(passwordInput).toBeInTheDocument();
//   //   expect(btnNode).toBeInTheDocument();
//   // });
  
//   // it('should enable the login button when inputs are typed', () => {
//   //   const { getByLabelText, getByTestId } = render(<App />);
//   //   const setLocalStorage = jest.fn();
//   //   const emailInput = getByLabelText(/Email:/i);
//   //   const passwordInput = getByLabelText(/Senha:/i);
//   //   const btnNode = getByTestId('login-submit-btn');
//   //   expect(btnNode).toBeDisabled();
//   //   const mockMail = 'jon@m.com';
//   //   const mockPass = '102384198';
//   //   userEvent.type(emailInput, mockMail);
//   //   userEvent.type(passwordInput, mockPass);
//   //   expect(btnNode).not.toBeDisabled();
//   //   userEvent.click(btnNode);

//   //   // tests 1 line on the header component
//   //   const serachBtn = getByTestId('search-top-btn');
//   //   userEvent.click(serachBtn);
//   // });
// });
