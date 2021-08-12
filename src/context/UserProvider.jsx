import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import UserContext from './UserContext';
import {
  APIdrinks,
  APIdrinksClickCat, APImeals, APImealsClickCat } from '../services/APImealsANDdrinks';

function UserProvider({ children }) {
  const [meals, setMeals] = useState([]);
  const [drinks, setDrinks] = useState([]);
  const [mealsBtnCat, setMealsBtnCat] = useState('');
  const [drinksBtnCat, setDrinksBtnCat] = useState('');
  const [showSearch, setShowSearch] = useState(false);

  useEffect(() => { // renderiza as comidas na tela principal
    const callAPImeals = async () => {
      const callAPI = await APImeals();
      const result = callAPI;
      setMeals(result);
    };
    callAPImeals();
  }, []);

  useEffect(() => { // renderiza as bebidas na tela principal
    const callAPIdrinks = async () => {
      const callAPI = await APIdrinks();
      const result = callAPI;
      setDrinks(result);
    };
    callAPIdrinks();
  }, []);

  useEffect(() => { // renderiza as comidas por categoria na tela principal
    const callAPImealsCat = async () => {
      if (!mealsBtnCat) return;
      const callAPI = await APImealsClickCat(mealsBtnCat);
      setMeals(callAPI);
    };
    callAPImealsCat();
  }, [mealsBtnCat]);

  useEffect(() => { // renderiza as bebidas por categoria na tela principal
    const callAPIdrinksCat = async () => {
      if (!drinksBtnCat) return;
      const callAPI = await APIdrinksClickCat(drinksBtnCat);
      setDrinks(callAPI);
    };
    callAPIdrinksCat();
  }, [drinksBtnCat]);

  const provider = {
    meals,
    drinks,
    setMeals,
    setDrinks,
    setMealsBtnCat,
    setDrinksBtnCat,
    showSearch,
    setShowSearch,
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
