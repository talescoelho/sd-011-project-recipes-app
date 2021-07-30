import PropTypes from 'prop-types';
import React, { useState } from 'react';
import AppContext from './AppContext';

function Provider({ children }) {
  const [showInput, setShowInput] = useState(false);
  const [inputValue, setInputValue] = useState({
    searchInput: '',
    radioInput: '',
  });

  const context = {
    showInput,
    setShowInput,
    inputValue,
    setInputValue,
  };

  return (
    <AppContext.Provider value={ context }>
      {children}
    </AppContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Provider;
