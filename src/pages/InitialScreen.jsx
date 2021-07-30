import PropTypes from 'prop-types';
import React from 'react';
import Header from '../components/Header';
import SearchBarProvider from '../context/searchBarProvider';
import Footer from '../components/Footer';
import RecipesCards from '../components/RecipesCards';

export default function Foods({ type }) {
  const showSearchButton = true;

  return (
    <SearchBarProvider>
      <Header pageName={ type } showSearchButton={ showSearchButton } />
      <RecipesCards type={ type } />
      <Footer />
    </SearchBarProvider>
  );
}

Foods.propTypes = {
  type: PropTypes.string.isRequired,
};
