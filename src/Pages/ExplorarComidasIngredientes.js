import React from 'react';
import PropTypes from 'prop-types';
import Header from '../components/Header';

function ExplorarComidasIngredientes({ title }) {
  return (
    <div>
      <Header title={ title } />
    </div>
  );
}

export default ExplorarComidasIngredientes;

ExplorarComidasIngredientes.propTypes = {
  title: PropTypes.string.isRequired,
};
