import React from 'react';
import FooterMenu from '../components/FooterMenu';
import Header from '../components/Header';
import RecipesCardsContainer from '../components/RecipesCardsContainer';

const Drinks = () => (
  <>
    <Header title="Bebidas" isButtonVisible />
    <RecipesCardsContainer />
    <FooterMenu />
  </>
);

export default Drinks;
