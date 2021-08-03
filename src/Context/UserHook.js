import React, { createContext, useState, useContext } from 'react';
import PropTypes from 'prop-types';

import {
  searchByFirstLetter,
  searchByIngredient,
  searchByName,
} from '../services/RequestFood';

const UserContext = createContext();

export function UserProvider({ children }) {
  const [user, setUser] = useState('');
  const [email, setEmail] = useState('');
  const [filtered, setFiltered] = useState([]);

  async function filterByName(filterText) {
    if (!filterText) return;
    const items = await searchByName(filterText);

    setFiltered(items);
  }

  async function filterByIngredient(filterText) {
    if (!filterText) return;
    const items = await searchByIngredient(filterText);

    setFiltered(items);
  }

  async function filterByFirstLetter(filterText) {
    if (!filterText) return;
    const items = await searchByFirstLetter(filterText);

    setFiltered(items);
  }

  const contextValues = {
    user,
    email,
    filtered,
    filterByName,
    filterByIngredient,
    filterByFirstLetter,
    setUser,
    setEmail,
    setFiltered,
  };

  return (
    <UserContext.Provider value={ contextValues }>
      { children }
    </UserContext.Provider>
  );
}

UserProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export const UserHook = () => useContext(UserContext);
