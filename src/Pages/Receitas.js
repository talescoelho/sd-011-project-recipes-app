import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import Header from '../components/Header';
import RenderRecipes from '../components/RenderRecipes';
import { getRecipes } from '../redux/slices/fetchReceitas';
import Footer from '../components/Footer';
import CategoryButtons from '../components/CategoryButtons';
import createRecipeObject from '../helpers/createRecipeObject';

function Receitas({ location: { recipeName } }) {
  // const { foods, drinks } = useSelector((state) => state.fetchReceitas);
  // const { fetchId, recipes, title } = createRecipeObject(foods, drinks);
  const { title } = createRecipeObject();
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   // if (!foods || Object.keys(foods).length === 0) {
  //   //   const URL = title === 'Comidas'
  //   //     ? 'foods'
  //   //     : 'drinks';
  //   //   dispatch(getRecipes(URL));
  //   // }
  //   dispatch(getRecipes(fetchId));
  // }, []);

  // if (!recipes || recipes.length === 0) return <p>Loading...</p>;

  return (
    <div>
      <Header title={ title } />
      <CategoryButtons />
      <RenderRecipes redirectedFromIngredients={ recipeName } />
      <Footer />
    </div>
  );
}

export default Receitas;

Receitas.propTypes = {
  location: PropTypes.shape({
    recipeName: PropTypes.string.isRequired,
  }).isRequired,
};