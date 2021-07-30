import React from 'react';
import PropTypes from 'prop-types';

import GlobalContext from './Context';

function Provider({ children }) {
  const context = {};
  return (

    <GlobalContext.Provider value={ context }>
      {children}
    </GlobalContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
