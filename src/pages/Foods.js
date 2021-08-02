import React from 'react';
import Header from '../components/Header';
import FooterMenu from '../components/FooterMenu';
import RecipesCardsContainer from '../components/RecipesCardsContainer';

const Foods = () => (
  <div>
    <Header title="Comidas" isButtonVisible />
    <RecipesCardsContainer />
    <FooterMenu />
  </div>
);
export default Foods;
