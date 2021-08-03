import React from 'react';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import Footer from '../components/Footer';

function ExplorarComidasOrigem({ title }) {
  return (
    <div>
      <Header title={ title } />
      <Footer />
    </div>
  );
}

export default ExplorarComidasOrigem;

ExplorarComidasOrigem.propTypes = {
  title: PropTypes.string.isRequired,
};
