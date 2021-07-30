import React from 'react';
import PropTypes from 'prop-types';
import Header from '../components/Header';

function ExplorarBebidas({ title }) {
  return (
    <div>
      <Header title={ title } />
    </div>
  );
}

export default ExplorarBebidas;

ExplorarBebidas.propTypes = {
  title: PropTypes.string.isRequired,
};
