import PropTypes from 'prop-types';
import React, { useContext } from 'react';
import { Redirect } from 'react-router';
import SearchBarContext from '../context/searchBarContext';
import RecipeCard from './RecipeCard';

export default function RecipesCards({ type }) {
  const { recipes, keyRedirect } = useContext(SearchBarContext);
  const verifyFood = () => (
    (recipes.length === 1 && keyRedirect) ? (
      <Redirect to={ `/comidas/${recipes[0].idMeal}` } />)
      : recipes.map((element, index) => (
        <RecipeCard type={ type } key={ index } index={ index } recipe={ element } />
      ))
  );

  const verifyDrink = () => (
    (recipes.length === 1 && keyRedirect) ? (
      <Redirect to={ `/bebidas/${recipes[0].idDrink}` } />)
      : recipes.map((element, index) => (
        <RecipeCard type={ type } key={ index } index={ index } recipe={ element } />
      ))
  );

  return (
    <div className=" d-flex flex-column align-items-center px-3">
      { (type.includes('omida')) ? verifyFood() : (verifyDrink())}
    </div>
  );
}

RecipesCards.propTypes = {
  type: PropTypes.string.isRequired,
};
