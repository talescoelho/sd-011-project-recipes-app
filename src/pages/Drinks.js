import React, { useEffect, useContext } from 'react';
import MainContext from '../context/MainContext';
import Header from '../components/Header';
import FooterMenu from '../components/FooterMenu';
import RecipesCardsContainer from '../components/RecipesCardsContainer';
import { getInitialDrinksRecipes } from '../services/theCockTailAPI';

function Drinks() {
  const {
    setData,
    setLoading,
  } = useContext(MainContext);

  useEffect(() => {
    setLoading(true);
    getInitialDrinksRecipes()
      .then((drinks) => {
        setData(drinks);
        setLoading(false);
      });
    return () => {
      setData([]);
    };
  }, [setData, setLoading]);

  return (
    <div>
      <Header title="Bebidas" isButtonVisible />
      <RecipesCardsContainer />
      <FooterMenu />
    </div>
  );
}

export default Drinks;
