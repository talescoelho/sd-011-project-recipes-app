import PropTypes from 'prop-types';
import React from 'react';
import Header from '../components/Header';
import SearchBarProvider from '../context/searchBarProvider';
import Footer from '../components/Footer';
import RecipesCards from '../components/RecipesCards';
import CategoriesButtons from '../components/CategoriesButtons';

export default function initialScreen({ title, type }) {
  return (
    <SearchBarProvider type={ type }>
      <Header title={ title } type={ type } showSearchButton />
      <CategoriesButtons type={ type } />
      <RecipesCards type={ type } />
      <Footer drink={ type === 'drink' } />
    </SearchBarProvider>
  );
}

initialScreen.propTypes = {
  type: PropTypes.string.isRequired,
};
