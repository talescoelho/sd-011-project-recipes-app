import React, { createContext, useState, useContext } from 'react';
import PropTypes from 'prop-types';

import {
  // searchByFirstLetter,
  // searchByIngredient,
  searchByName,
} from '../services/RequestFood';

const UserContext = createContext();

export function UserProvider({ children }) {
  const [user, setUser] = useState('');
  const [email, setEmail] = useState('');
  const [filtered, setFiltered] = useState([]);

  async function filterFoodDrink(filterText) {
    if (!filterText) return;
    const { items } = await searchByName(filterText);

    setFiltered(items);
  }

  return (
    <UserContext.Provider
      value={
        { user, setUser, email, setEmail, filtered, filterFoodDrink }
      }
    >
      { children }
    </UserContext.Provider>
  );
}

UserProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export const UserHook = () => useContext(UserContext);
