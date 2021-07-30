import React from 'react';
import PropTypes from 'prop-types';
import Header from '../components/Header';

function ExplorarComidasOrigem({ title }) {
  return (
    <div>
      <Header title={ title } />
    </div>
  );
}

export default ExplorarComidasOrigem;

ExplorarComidasOrigem.propTypes = {
  title: PropTypes.string.isRequired,
};
