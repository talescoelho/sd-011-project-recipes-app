import React from 'react';
import PropTypes from 'prop-types';
import Header from '../components/Header';

function ReceitasFavoritas({ title }) {
  return (
    <div>
      <Header title={ title } />
    </div>
  );
}

export default ReceitasFavoritas;

ReceitasFavoritas.propTypes = {
  title: PropTypes.string.isRequired,
};
