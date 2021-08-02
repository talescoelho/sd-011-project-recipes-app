import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import RenderRecipes from './RenderRecipes';

function ShowRecipes({ typeOfRecipe }) {
  const { data } = useSelector((state) => state.fetchReceitas);
  const dispatch = useDispatch();

  useEffect(() => {
    if (data[0].length === 0) {
      const URL = typeOfRecipe === 'food'
        ? 'https://www.themealdb.com/api/json/v1/1/search.php?s='
        : 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';
      dispatch(getRecipes(URL));
    }
  }, [data]);

  return (
    <RenderRecipes />
  );
}

export default ShowRecipes;

ShowRecipes.propTypes = {
  typeOfRecipe: PropTypes.string.isRequired,
};
