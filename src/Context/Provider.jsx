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
    <MainContext.xabl value={ obj }>
      {children}
    </MainContext.xabl>
  );
};

export default Provider;

Provider.propTypes = {
  children: PropTypes.array,
}.isRequired;
