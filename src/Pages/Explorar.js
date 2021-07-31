import React from 'react';
import PropTypes from 'prop-types';
import Header from '../components/Header';

function Explorar({ title }) {
  return (
    <div>
      <Header title={ title } />
    </div>
  );
}

export default Explorar;

Explorar.propTypes = {
  title: PropTypes.string.isRequired,
};
