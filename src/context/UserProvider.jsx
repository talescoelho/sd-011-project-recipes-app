import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import UserContext from './UserContext';
import { APIdrinks, APImeals } from '../services/APImealsANDdrinks';

function UserProvider({ children }) {
  const [meals, setMeals] = useState([]);
  const [drinks, setDrinks] = useState([]);

  useEffect(() => {
    const callAPImeals = async () => {
      const callAPI = await APImeals();
      const result = callAPI.meals;
      setMeals(result);
    };
    callAPImeals();
  }, []);

  useEffect(() => {
    const callAPIdrinks = async () => {
      const callAPI = await APIdrinks();
      const result = callAPI.drinks;
      setDrinks(result);
    };
    callAPIdrinks();
  }, []);

  const provider = {
    meals,
    drinks,
  };

  return (
    <UserContext.Provider value={ provider }>
      {children}
    </UserContext.Provider>
  );
}

UserProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default UserProvider;
