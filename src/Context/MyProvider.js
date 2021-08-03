import React, { useState } from 'react';
import PropTypes from 'prop-types';
import MyContext from './MyContext';

const MyProvider = ({ children }) => {
  const [recipe, setRecipe] = useState();

  return (
    <MyContext.Provider value={ { recipe, setRecipe } }>
      { children }
    </MyContext.Provider>
  );
};

MyProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MyProvider;
