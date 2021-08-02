import React, { useEffect, useContext } from 'react';
import MainContext from '../context/MainContext';
import Header from '../components/Header';
import FooterMenu from '../components/FooterMenu';
import RecipesCardsContainer from '../components/RecipesCardsContainer';
import { getInitialDrinksRecipes } from '../services/theCockTailAPI';

function Drinks() {
  const {
    setData,
    loading,
    setLoading,
  } = useContext(MainContext);

  console.log(loading);
  useEffect(() => {
    setLoading(true);
    getInitialDrinksRecipes()
      .then((drinks) => {
        setData(drinks);
        setLoading(false);
      });
  }, [setData, setLoading]);

  return (
    <>
      <Header title="Bebidas" isButtonVisible />
      <RecipesCardsContainer />
      <FooterMenu />
    </>
  );
}

export default Drinks;
