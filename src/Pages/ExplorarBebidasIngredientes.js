import React from 'react';
import PropTypes from 'prop-types';
import Header from '../components/Header';

function ExplorarBebidasIngredientes({ title }) {
  return (
    <div>
      <Header title={ title } />
    </div>
  );
}

export default ExplorarBebidasIngredientes;

ExplorarBebidasIngredientes.propTypes = {
  title: PropTypes.string.isRequired,
};
