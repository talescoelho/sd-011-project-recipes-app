import React, { useDebugValue, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { setInitialRecipes, setToRender } from '../redux/slices/fetchReceitas';
import URLDictionary, { allFoods, allDrinks } from '../helpers/endpoints';
import createRecipeObject from '../helpers/createRecipeObject';
import useFetchInitial from '../hooks/useFetchInitial';

function RenderRecipes({ redirectedFromIngredients }) {
  const dispatch = useDispatch();
  const { data, isLoading, error } = useFetchInitial(allFoods, allDrinks);
  const { foods, drinks, toRender, filterByCategory } = useSelector((state) => state.fetchReceitas);
  console.log(foods);
  const [render, setRender] = useState(foods);
  const [selectedCategory, setSelectedCategory] = useState('All');

  // useEffect(() => {
  //   return () => {
  //     dispatch(setToRender([]));
  //   };
  // }, []);
  console.log(render);
  console.log();

  async function fetchHandle() {
    const url = `${URLDictionary.filterByFoodCategorie}${filterByCategory}`;
    const resp = await fetch(url);
    const result = await resp.json();
    if (filterByCategory === 'All') {
      setRender(foods)
    } else {
      setRender(result);
    }
  }

  useEffect(() => {
    fetchHandle()
  }, [selectedCategory, filterByCategory]);
  
  if (error) return <p>{error}</p>;

  if (isLoading || render === []) return <p>Loading...</p>;

  if (data) {
    dispatch(setInitialRecipes(data));
  }

  const recipeType = (createRecipeObject(foods, drinks));

  // useEffect(() => {
  //   if (redirectedFromIngredients !== undefined) {
  //     dispatch(setInput(redirectedFromIngredients));
  //     const { pathname } = window.location;
  //     const recipeURL = pathname.split('/')[1];
  //     const action = recipeURL === 'comidas'
  //       ? 'foodByIngredients'
  //       : 'drinkByIngredients';
  //     dispatch(getRecipes(action));
  //   }
  // }, [redirectedFromIngredients, dispatch]);

  const { recipes, type, name, image, id, linkToGo } = recipeType;
  // let render = recipes;
  // if (toRender && toRender.length > 0) {
  //   console.log("Entrou");
  //   render = toRender;
  // }
  // console.log("Recipes: ", recipes);
  // console.log("torender: ", toRender);
  // console.log("render: ", render);
  const limitRecipes = 12;

  return (
    <section>
      {(type !== '' && recipes !== null)
        && render.slice(0, limitRecipes).map((recipe, index) => (
          <Link to={ `${linkToGo}/${recipe[id]}` } key={ index }>
            <div data-testid={ `${index}-recipe-card` } key={ index }>
              <p data-testid={ `${index}-card-name` }>{recipe[name]}</p>
              <img
                data-testid={ `${index}-card-img` }
                src={ recipe[image] }
                alt={ name }
                width="50px"
              />
            </div>
          </Link>
        ))}

    </section>
  );
}

export default RenderRecipes;

RenderRecipes.propTypes = {
  redirectedFromIngredients: PropTypes.string.isRequired,
};
