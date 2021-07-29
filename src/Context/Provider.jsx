import React, { useState } from 'react';
import PropTypes from 'prop-types';
import MainContext from './MainContext';

const Provider = ({ children }) => {
  const [dataDrinks, getDataDrinks] = useState([]);
  const [dataFoods, getDataFoods] = useState([]);
  const obj = {
    dataDrinks,
    getDataDrinks,
    dataFoods,
    getDataFoods,
  };
  return (
    <MainContext.Provider value={ obj }>
      {children}
    </MainContext.Provider>
  );
};

export default Provider;

Provider.propTypes = {
  children: PropTypes.array,
}.isRequired;
