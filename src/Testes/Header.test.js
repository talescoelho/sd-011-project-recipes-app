/* import { screen } from '@testing-library/dom';
import { fireEvent } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';
import React from 'react';
// import App from '../App';
import renderWithRouter from '../helper/renderWithRouter';
import Header from '../components/Header';

const PROFILE_BTN = 'profile-top-btn';
const PAGE_TITLE = 'page-title';
const SEARCH_BTN = 'search-top-btn';
const SEARCH_INPUT = 'search-input';
const INGREDIENTS_SEARCH_RADIO = 'ingredient-search-radio';
const NAME_SEARCH_RADIO = 'name-search-radio';
const FIRST_LETTER_SEARCH_RADIO = 'first-letter-search-radio';
const EXEC_SEARCH_BTN = 'exec-search-btn';

beforeEach(() => jest.clearAllMocks());

describe('1 - Check Header', () => {
  test('Check header\'s elements', () => {
    renderWithRouter(<Header />);
    const profileBtn = screen.getByTestId(PROFILE_BTN);
    const pageTitle = screen.getByTestId(PAGE_TITLE);
    const searchBtn = screen.getByTestId(SEARCH_BTN);
    const img = screen.getByRole('img');

    expect(profileBtn).toBeInTheDocument();
    expect(pageTitle).toBeInTheDocument();
    expect(searchBtn).toBeInTheDocument();
    expect(img).toBeInTheDocument();
  });
  test('Route must be \'/profile\' after click.', () => {
    const { history } = renderWithRouter(<Header />, '/');
    const profileBtn = screen.getByTestId(PROFILE_BTN);
    fireEvent.click(profileBtn);
    expect(history.location.pathname).toBe('/profile');
  });
});

describe('2 - Check Header\'s Search Bar', () => {
  test('Check header\'s Search Bar elements', () => {
    renderWithRouter(<Header />);
    const searchInput = screen.getByTestId(SEARCH_INPUT);
    const ingredientsSearch = screen.getByTestId(INGREDIENTS_SEARCH_RADIO);
    const nameSearch = screen.getByTestId(NAME_SEARCH_RADIO);
    const firstLetterSearch = screen.getByTestId(FIRST_LETTER_SEARCH_RADIO);
    const execSearchBtn = screen.getByTestId(EXEC_SEARCH_BTN);

    expect(searchInput).toBeInTheDocument();
    expect(ingredientsSearch).toBeInTheDocument();
    expect(nameSearch).toBeInTheDocument();
    expect(firstLetterSearch).toBeInTheDocument();
    expect(execSearchBtn).toBeInTheDocument();
  });
});
 */
