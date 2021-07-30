import PropTypes from 'prop-types';
import React, { useContext } from 'react';
import { Redirect } from 'react-router';
import SearchBarContext from '../context/searchBarContext';
import RecipeCardFood from './RecipeCardFood';
import RecipeCardCocktail from './RecipeCardCocktail';

export default function RecipesCards({ type }) {
  const { data, recipes } = useContext(SearchBarContext);
  const verifyFood = () => (
    (data.length === 1) ? (
      <Redirect to={ `/comidas/${data[0].idMeal}` } />)
      : recipes.map((element, index) => (
        <RecipeCardFood key={ index } index={ index } recipe={ element } />
      ))
  );

  const verifyDrink = () => (
    (data.length === 1) ? (
      <Redirect to={ `/bebidas/${data[0].idDrink}` } />)
      : recipes.map((element, index) => (
        <RecipeCardCocktail key={ index } index={ index } recipe={ element } />
      ))
  );

  return (
    <div>
      { (type.includes('Comida')) ? verifyFood() : (verifyDrink())}
    </div>
  );
}

RecipesCards.propTypes = {
  type: PropTypes.string.isRequired,
};
