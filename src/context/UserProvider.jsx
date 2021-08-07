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
  const [btnAll, setBtnAll] = useState(0);

  useEffect(() => { // renderiza as comidas na tela principal
    const callAPImeals = async () => {
      const callAPI = await APImeals();
      const result = callAPI.meals;
      setMeals(result);
    };
    callAPImeals();
  }, []);

  useEffect(() => { // renderiza as comidas na tela principal qual o btn All é clicado
    const callAPImeals2 = async () => {
      const callAPI2 = await APImeals();
      const result = callAPI2.meals;
      setMeals(result);
    };
    callAPImeals2();
  }, [btnAll]);

  useEffect(() => { // renderiza as bebidas na tela principal qual o btn All é clicado
    const callAPIdrinks2 = async () => {
      const callAPI2 = await APIdrinks();
      const result = callAPI2.drinks;
      setDrinks(result);
    };
    callAPIdrinks2();
  }, [btnAll]);

  useEffect(() => { // renderiza as bebidas na tela principal
    const callAPIdrinks = async () => {
      const callAPI = await APIdrinks();
      const result = callAPI.drinks;
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
    setMealsBtnCat,
    setDrinksBtnCat,
    setBtnAll,
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
