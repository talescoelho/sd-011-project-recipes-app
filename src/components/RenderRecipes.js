import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link, useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { setInput, getRecipes } from '../redux/slices/fetchReceitas';
import useFetch from '../hooks/useFetch';
import { foods } from '../helpers/endpoints';
import identifyRecipeType from '../helpers/identifyRecipeType';

function RenderRecipes({ redirectedFromIngredients }) {
  const location = useLocation();
  console.log(identifyRecipeType())
  const { data, isLoading, error } = useFetch();

  // const dispatch = useDispatch();
  // const [recipeType, setRecipeType] = useState({
  //   type: '',
  //   name: '',
  //   image: '',
  // });
  // // const { drinks, foods } = useSelector((state) => state.fetchReceitas);
  // const [linkToGo, setLinkToGo] = useState('');

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

  // id: idDrink,
  // type: 'bebida',
  // area: '',
  // category: strCategory,
  // alcoholicOrNot: strAlcoholic,
  // name: strDrink,
  // image: strDrinkThumb,


  // id: idMeal,
  //   type: 'comida',
  //   area: strArea,
  //   category: strCategory,
  //   alcoholicOrNot: '',
  //   name: strMeal,
  //   image: strMealThumb,

  // useEffect(() => {
  //   const { pathname } = window.location;
  //   setLinkToGo(pathname);
  //   const currentURL = pathname.split('/')[1];
  //   if (currentURL === 'comidas') {
  //     setRecipeType({
  //       recipes: foods.meals,
  //       type: 'meals',
  //       id: 'idMeal',
  //       name: 'strMeal',
  //       image: 'strMealThumb',
  //     });
  //   } else {
  //     setRecipeType({
  //       recipes: drinks.drinks,
  //       type: 'drinks',
  //       id: 'idDrink',
  //       name: 'strDrink',
  //       image: 'strDrinkThumb',
  //     });
  //   }
  // }, [drinks.drinks, foods.meals]);

  // const { recipes, type, name, image, id } = recipeType;
  // const limitRecipes = 12;

  return (
    <div>
      teste
    </div>
    // <section>
    //   {(type !== '' && recipes !== null)
    //     && recipes.slice(0, limitRecipes).map((recipe, index) => (
    //       <Link to={ `${linkToGo}/${recipe[id]}` } key={ index }>
    //         <div data-testid={ `${index}-recipe-card` } key={ index }>
    //           <p data-testid={ `${index}-card-name` }>{recipe[name]}</p>
    //           <img
    //             data-testid={ `${index}-card-img` }
    //             src={ recipe[image] }
    //             alt={ name }
    //             width="50px"
    //           />
    //         </div>
    //       </Link>
    //     ))}

    // </section>

  );
}

export default RenderRecipes;

RenderRecipes.propTypes = {
  redirectedFromIngredients: PropTypes.string.isRequired,
};
