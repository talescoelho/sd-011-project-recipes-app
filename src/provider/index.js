import React from 'react';
import PropTypes from 'prop-types';
import GlobalContext from '../context';

export default function Provider({ children }) {
  return (
    <GlobalContext.Provider>
      { children }
    </GlobalContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};
