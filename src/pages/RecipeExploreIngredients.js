import React, { useEffect, useContext } from 'react';
import { useLocation } from 'react-router-dom';
import MainContext from '../context/MainContext';
import FooterMenu from '../components/FooterMenu';
import Header from '../components/Header';
import { getDrinksIngredients } from '../services/theCockTailAPI';
import { getMealsIngredients } from '../services/theMealAPI';
import RecipesCardsContainer from '../components/RecipesCardsContainer';

const RecipeExploreIngredients = () => {
  const { pathname } = useLocation();
  const explorarComidas = '/explorar/comidas/ingredientes';
  const { setData, setLoading } = useContext(MainContext);

  useEffect(() => {
    setLoading(true);
    if (explorarComidas === pathname) {
      getMealsIngredients()
        .then((result) => {
          setLoading(false);
          return setData(result);
        });
    } else {
      getDrinksIngredients()
        .then((result) => {
          setLoading(false);
          return setData(result);
        });
    }
  }, [pathname, setData, setLoading]);
  return (
    <>
      <Header title="Explorar Ingredientes" />
      <RecipesCardsContainer test="ingredient" />
      <FooterMenu />
    </>
  );
};

export default RecipeExploreIngredients;
