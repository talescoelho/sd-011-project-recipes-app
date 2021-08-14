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
  const [filtered, setFiltered] = useState([]);
  const [initialItens, setInitialItens] = useState([]);
  const [byCategory, setByCategory] = useState(false);
  const [ingredient, setIngredient] = useState('');

  async function filterByNameFood(filterText) {
    const items = await searchByName(filterText);
    if (items !== null && items.length >= 1) {
      setFiltered(items);
    }
  }

  async function filterByIngredientFood(filterText) {
    if (!filterText) return;
    const items = await searchByIngredient(filterText);
    setFiltered(items);
  }

  async function filterByFirstLetterFood(filterText) {
    if (!filterText) return;
    const items = await searchByFirstLetter(filterText);
    setFiltered(items);
  }

  async function filterByNameDrink(filterText) {
    if (!filterText) return;
    const items = await searchDrinkByName(filterText);
    if (items !== null && items.length >= 1) {
      setFiltered(items);
    }
  }

  async function filterByIngredientDrink(filterText) {
    if (!filterText) return;
    const items = await searchDrinkByIngredient(filterText);
    setFiltered(items);
  }

  async function filterByFirstLetterDrink(filterText) {
    if (!filterText) return;
    const items = await searchDrinkByFirstLetter(filterText);
    setFiltered(items);
  }

  const contextValues = {
    byCategory,
    setByCategory,
    ingredient,
    setIngredient,
    filtered,
    setFiltered,
    initialItens,
    setInitialItens,
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
