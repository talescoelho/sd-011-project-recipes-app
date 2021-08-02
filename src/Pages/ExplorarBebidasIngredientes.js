import React from 'react';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import IngredientsDetails from '../components/IngredientsDetails';

function ExplorarBebidasIngredientes({ title }) {
  return (
    <div>
      <Header title={ title } />
      <IngredientsDetails />
    </div>
  );
}

export default ExplorarBebidasIngredientes;

ExplorarBebidasIngredientes.propTypes = {
  title: PropTypes.string.isRequired,
};
