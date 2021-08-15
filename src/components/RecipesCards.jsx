import PropTypes from 'prop-types';
import React, { useContext } from 'react';
import { Redirect } from 'react-router';
import SearchBarContext from '../context/searchBarContext';
import RecipeCard from './RecipeCard';

export default function RecipesCards({ type }) {
  const { recipes, keyRedirect } = useContext(SearchBarContext);
  const newType = type === 'food' ? 'comidas' : 'bebidas';
  const id = type === 'food' ? 'idMeal' : 'idDrink';
  return (
    <div className=" d-flex flex-column align-items-center px-3">
      {(recipes.length === 1 && keyRedirect) ? (
        <Redirect to={ `/${newType}/${recipes[0][id]}` } />)
        : recipes.map((element, index) => (
          <RecipeCard type={ newType } key={ index } index={ index } recipe={ element } />
        ))}
    </div>
  );
}

RecipesCards.propTypes = {
  type: PropTypes.string.isRequired,
};
