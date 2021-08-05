import React from 'react';
import PropTypes from 'prop-types';
import MyContext from './MyContext';

const HomeRecipes = ({ children }) => {
  const context = {
    // valores...
  };

  return (
    <MyContext.Provider value={ context }>
      { children }
    </MyContext.Provider>
  );
};

HomeRecipes.propTypes = {
  children: PropTypes.node.isRequired,
};
