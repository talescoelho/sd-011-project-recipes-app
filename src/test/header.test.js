// import React from 'react';
// import userEvent from '@testing-library/user-event';
// import App from '../App';
// import renderWithRouterAndContext from './renderWithRouterAndContext';
// import '@testing-library/jest-dom/extend-expect';

// const EMAIL_INPUT = 'alguem@alguem.com';
// const PASSWORD_INPUT = '1234567';

// describe('Teste do componente Header os data-testids `profile-top-btn`, `page-title` e `search-top-btn`', () => {
//   test('O header tem os ícones corretos na tela de principal de receitas de comidas', () => {
//     const { getByText, getByTestId, history } = renderWithRouterAndContext(<App />);

//     userEvent.type(getByTestId('email-input'), EMAIL_INPUT);
//     userEvent.type(getByTestId('password-input'), PASSWORD_INPUT);
//     userEvent.click(getByTestId('login-submit-btn'));

//     expect(getByText('Explorar Comidas')).toBeInTheDocument();

//     expect(getByTestId('profile-top-btn')).toBeInTheDocument();
//     expect(getByTestId('page-title')).toBeInTheDocument();
//     expect(getByTestId('search-top-btn')).toBeInTheDocument();
//   });

//   test('Não tem Header na página Login', async () => {
//     const { getByText, getByTestId, getAllByTestId, queryAllByTestId, history } = renderWithRouterAndContext(<App />);

//     // userEvent.type(getByTestId('email-input'), EMAIL_INPUT);
//     // userEvent.type(getByTestId('password-input'), PASSWORD_INPUT);
//     // userEvent.click(getByTestId('login-submit-btn'));

//     expect(getByText('Login')).toBeInTheDocument();

//     expect(queryAllByTestId('profile-top-btn')).toHaveLength(0);
//     expect(queryAllByTestId('page-title')).toHaveLength(0);
//     expect(queryAllByTestId('search-top-btn')).toHaveLength(0);
//     // Para utilizar getBy é necessário utilizar async await
//     // https://testing-library.com/docs/guide-disappearance
//   });

//   test('O header tem os ícones corretos na tela de principal de receitas de bebidas', () => {
//     const { getByText, getByTestId, history } = renderWithRouterAndContext(<App />);

//     userEvent.type(getByTestId('email-input'), EMAIL_INPUT);
//     userEvent.type(getByTestId('password-input'), PASSWORD_INPUT);
//     userEvent.click(getByTestId('login-submit-btn'));
//     userEvent.click(getByTestId(''));

//     expect(getByText('Explorar Comidas')).toBeInTheDocument();

//     expect(getByTestId('profile-top-btn')).toBeInTheDocument();
//     expect(getByTestId('page-title')).toBeInTheDocument();
//     expect(getByTestId('search-top-btn')).toBeInTheDocument();
//   });
// });
