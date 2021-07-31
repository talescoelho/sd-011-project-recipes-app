import React from 'react';
import PropTypes from 'prop-types';
import Header from '../components/Header';

function ReceitasFeitas({ title }) {
  return (
    <div>
      <Header title={ title } />
    </div>
  );
}

export default ReceitasFeitas;

ReceitasFeitas.propTypes = {
  title: PropTypes.string.isRequired,
};
