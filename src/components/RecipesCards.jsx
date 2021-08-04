import PropTypes from 'prop-types';
import React, { useContext } from 'react';
import { Redirect } from 'react-router';
import SearchBarContext from '../context/searchBarContext';
import RecipeCardFood from './RecipeCardFood';
import RecipeCardCocktail from './RecipeCardCocktail';

export default function RecipesCards({ type }) {
  const { recipes, keyRedirect } = useContext(SearchBarContext);
  const verifyFood = () => (
    (recipes.length === 1 && keyRedirect) ? (
      <Redirect to={ `/comidas/${recipes[0].idMeal}` } />)
      : recipes.map((element, index) => (
        <RecipeCardFood key={ index } index={ index } recipe={ element } />
      ))
  );

  const verifyDrink = () => (
    (recipes.length === 1 && keyRedirect) ? (
      <Redirect to={ `/bebidas/${recipes[0].idDrink}` } />)
      : recipes.map((element, index) => (
        <RecipeCardCocktail key={ index } index={ index } recipe={ element } />
      ))
  );

  return (
    <div>
      { (type.includes('omida')) ? verifyFood() : (verifyDrink())}
    </div>
  );
}

RecipesCards.propTypes = {
  type: PropTypes.string.isRequired,
};
