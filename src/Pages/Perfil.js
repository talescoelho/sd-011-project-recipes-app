import React from 'react';
import PropTypes from 'prop-types';
import Header from '../components/Header';

function Perfil({ title }) {
  return (
    <div>
      <Header title={ title } />
    </div>
  );
}

export default Perfil;

Perfil.propTypes = {
  title: PropTypes.string.isRequired,
};
