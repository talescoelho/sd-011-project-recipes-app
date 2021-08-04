import React from 'react';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import Footer from '../components/Footer';

function Perfil({ title }) {
  return (
    <div>
      { console.log('rendered perfil ')}
      <Header title={ title } />
      <Footer />
    </div>
  );
}

export default Perfil;

Perfil.propTypes = {
  title: PropTypes.string.isRequired,
};
