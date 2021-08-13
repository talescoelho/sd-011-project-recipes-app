import PropTypes from 'prop-types';
import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';

export default function ExploreDynamic({ type }) {
  const showSearchButton = false;
  if (type.includes('omida')) {
    return (
      <div>
        <Header pageName={ type } showSearchButton={ showSearchButton } />
        <button
          type="button"
          data-testid="explore-by-ingredient"
        >
          {' '}
          Por Ingredientes
        </button>
        <Footer />
      </div>
    );
  }
  return (
    <div>
      <Header pageName={ type } showSearchButton={ showSearchButton } />
      { type }
      <Footer />
    </div>
  );
}

ExploreDynamic.propTypes = {
  type: PropTypes.string.isRequired,
};
