import React from 'react';
import { fireEvent } from '@testing-library/react';
import Header from '../components/Header';
import renderWithRouterAndStore from './testConfig';
import { createMemoryHistory } from 'history';

const history = createMemoryHistory({ initialEntries: [`/comidas`] });

afterEach(() => jest.clearAllMocks());

describe('Header que será usado em várias páginas da aplicação', () => {

  test('Elemento de profile deve estar renderizando', () => {
    const { getByTestId } = renderWithRouterAndStore(<Header 
      title="Comidas" mode="comidas" history={history}/>);
    const profileElement = getByTestId('profile-top-btn');
    expect(profileElement).toBeInTheDocument();
  });
  test('Elemento título deve renderizar conforme a props', () => {
    const { getByTestId } = renderWithRouterAndStore(<Header 
      title="test" mode="comidas" history={history}/>);
    const title = getByTestId('page-title');
    expect(title).toBeInTheDocument();
    expect(title).toHaveTextContent('test');
  });
  test('Elemento search deve renderizar se for chamado como props', () => {
    const { getByTestId } = renderWithRouterAndStore(<Header 
      title="Comidas" mode="comidas" hasSearchBar history={history}/>)
    const search = getByTestId('search-top-btn');
    expect(search).toBeInTheDocument();
  })
  test('O botão de search executa a lógica correta quando clicado', () => {
    const { getByTestId } = renderWithRouterAndStore(<Header 
      title="Comidas" mode="comidas" hasSearchBar history={history}/>)
    const searchButton = getByTestId('search-btn');
    expect(searchButton).toBeInTheDocument();

    fireEvent.click(searchButton);
    const searchInput = getByTestId('search-input');
    expect(searchInput).toBeInTheDocument();

    fireEvent.click(searchButton);
    expect(searchInput).not.toBeInTheDocument();

  })

  // test('Testando o campo de email', () => {
  //   const { getByTestId } = renderWithRouterAndStore(<Login />);
  //   const TEST_EMAIL = 'email@email.com';

  //   const inputEmail = getByTestId(EMAIL_INPUT_TEST_ID);
  //   expect(inputEmail).toHaveValue('');

  //   fireEvent.change(inputEmail, { target: { value: TEST_EMAIL } });
  //   expect(inputEmail).toHaveValue(TEST_EMAIL);
  // });
});