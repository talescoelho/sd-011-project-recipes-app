import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import Header from '../components/Header';
import RenderRecipes from '../components/RenderRecipes';
import { getRecipes, setTypeRecipe } from '../redux/slices/fetchReceitas';
import CategoryButtons from '../components/CategoryButtons';

function Comidas({ title }) {
  const { meals } = useSelector((state) => state.fetchReceitas);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setTypeRecipe({ typeRecipe: 'meals' }));
    if (meals && meals.length === 0) {
      const URL = title === 'Comidas'
        ? 'https://www.themealdb.com/api/json/v1/1/search.php?s='
        : 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';
      dispatch(getRecipes(URL));
    }
  }, [dispatch]);

  return (
    <div>
      <Header title={ title } />
      {meals.length > 0 && <RenderRecipes />}
    </div>
  );
}

export default Comidas;

Comidas.propTypes = {
  title: PropTypes.string.isRequired,
};
