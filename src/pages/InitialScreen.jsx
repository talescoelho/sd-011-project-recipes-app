import PropTypes from 'prop-types';
import React from 'react';
import Header from '../components/Header';
import SearchBarProvider from '../context/searchBarProvider';
import Footer from '../components/Footer';
import RecipesCards from '../components/RecipesCards';
import CategoriesButtons from '../components/CategoriesButtons';

export default function initialScreen({ type }) {
  const showSearchButton = true;
  return (
    <SearchBarProvider type={ type }>
      <Header pageName={ type } showSearchButton={ showSearchButton } />
      <CategoriesButtons type={ type } />
      <RecipesCards type={ type } />
      <Footer />
    </SearchBarProvider>
  );
}

initialScreen.propTypes = {
  type: PropTypes.string.isRequired,
};
