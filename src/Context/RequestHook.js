import React, { createContext, useState, useContext } from 'react';
import PropTypes from 'prop-types';

import {
  searchByFirstLetter,
  searchByIngredient,
  searchByName,
} from '../services/RequestFood';

import {
  searchDrinkByFirstLetter,
  searchDrinkByIngredient,
  searchDrinkByName,
} from '../services/RequestDrinks';

const RequestContext = createContext();

export function RequestProvider({ children }) {
  const [filteredFood, setFilteredFood] = useState([]);
  const [filteredDrink, setFilteredDrink] = useState([]);
  const [initialItensFood, setInitialItensFood] = useState([]);
  const [initialItensDrink, setInitialItensDrink] = useState([]);

  async function filterByNameFood(filterText) {
    setFilteredFood([]);
    setInitialItensFood([]);
    const items = await searchByName(filterText);
    if (items !== null && items.length >= 1) {
      setFilteredFood(items);
    }
  }

  async function filterByIngredientFood(filterText) {
    if (!filterText) return;
    setFilteredFood([]);
    setInitialItensFood([]);
    const items = await searchByIngredient(filterText);
    setFilteredFood(items);
  }

  async function filterByFirstLetterFood(filterText) {
    if (!filterText) return;
    setFilteredFood([]);
    setInitialItensFood([]);
    const items = await searchByFirstLetter(filterText);
    setFilteredFood(items);
  }

  async function filterByNameDrink(filterText) {
    if (!filterText) return;
    const items = await searchDrinkByName(filterText);
    if (items !== null && items.length >= 1) {
      setFilteredDrink(items);
    }
  }

  async function filterByIngredientDrink(filterText) {
    if (!filterText) return;
    const items = await searchDrinkByIngredient(filterText);
    setFilteredDrink(items);
  }

  async function filterByFirstLetterDrink(filterText) {
    if (!filterText) return;
    const items = await searchDrinkByFirstLetter(filterText);
    setFilteredDrink(items);
  }

  const contextValues = {
    filteredFood,
    setFilteredFood,
    filteredDrink,
    setFilteredDrink,
    initialItensFood,
    setInitialItensFood,
    initialItensDrink,
    setInitialItensDrink,
    filterByNameFood,
    filterByIngredientFood,
    filterByFirstLetterFood,
    filterByNameDrink,
    filterByIngredientDrink,
    filterByFirstLetterDrink,
  };

  return (
    <RequestContext.Provider value={ contextValues }>
      { children }
    </RequestContext.Provider>
  );
}

RequestProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export const RequestHook = () => useContext(RequestContext);
