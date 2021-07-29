import React, { useState } from 'react';
import PropTypes from 'prop-types';
import GlobalContext from './GlobalContext';

function Provider({ children }) {
  const [data] = useState('');

  return (
    <GlobalContext.Provider value={ data }>{ children }</GlobalContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node,
}.isRequired;

export default Provider;
