import React from 'react';
import PropTypes from 'prop-types';
import GlobalContext from './GlobalContext';

function Provider({ children }) {
  const Context = {

  };
  return (
    <GlobalContext value={ Context }>{ children }</GlobalContext>
  );
}

Provider.propTypes = {
  children: PropTypes.node,
}.isRequired;

export default Provider;
