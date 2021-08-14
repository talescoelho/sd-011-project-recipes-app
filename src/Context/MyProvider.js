import React, { useState } from 'react';
import PropTypes from 'prop-types';
import MyContext from './MyContext';

export default function MyProvider({ children }) {
  const [recipe, setRecipe] = useState({ meals: [], drinks: [] });
  const [inProgress, setInProgress] = useState({ cocktails: {
    idDrink: [],
  },
  meals: {
    idFood: [],
  },
  });

  const context = {
    recipe,
    setRecipe,
    inProgress,
    setInProgress,
  };

  return (
    <MyContext.Provider value={ context }>
      { children }
    </MyContext.Provider>
  );
}

MyProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
