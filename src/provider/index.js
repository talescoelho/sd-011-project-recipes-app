import React, { useState } from 'react';
import PropTypes from 'prop-types';
import GlobalContext from '../context';
import { fetchApiDrinks, fetchApiMeals } from '../services';

export default function Provider({ children }) {
  const [foods, setfoods] = useState([]);
  const [drinks, setdrinks] = useState([]);

  const getDataFromFoods = async (url, search) => {
    const getFood = await fetchApiMeals(url, search);
    setfoods(getFood);
  };

  const getDataFromDrinks = async (url, search) => {
    const getDrink = await fetchApiDrinks(url, search);
    setdrinks(getDrink);
  };

  return (
    <GlobalContext.Provider
      value={ {
        foods,
        getDataFromFoods,
        drinks,
        getDataFromDrinks,

      } }
    >
      { children }
    </GlobalContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};
