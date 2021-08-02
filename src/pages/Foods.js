import React, { useEffect, useContext } from 'react';
import MainContext from '../context/MainContext';
import Header from '../components/Header';
import FooterMenu from '../components/FooterMenu';
import RecipesCardsContainer from '../components/RecipesCardsContainer';
import { getInitialMealsRecipes } from '../services/theMealAPI';

function Foods() {
  const {
    setData,
    setLoading,
  } = useContext(MainContext);

  useEffect(() => {
    setLoading(true);
    getInitialMealsRecipes()
      .then((meals) => {
        setData(meals);
        setLoading(false);
      });
    return () => {
      setData([]);
    };
  }, [setData, setLoading]);

  return (
    <div>
      <Header title="Comidas" isButtonVisible />
      <RecipesCardsContainer />
      <FooterMenu />
    </div>

  );
}

export default Foods;
