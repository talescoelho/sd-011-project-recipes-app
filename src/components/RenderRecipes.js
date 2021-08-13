import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { setInitialRecipes, setToRender } from '../redux/slices/fetchReceitas';
import URLDictionary, {
  allFoods,
  allDrinks,
  filterByFoodCategory,
  filterByDrinkCategory,
} from '../helpers/endpoints';
import createRecipeObject from '../helpers/createRecipeObject';
import useFetchInitial from '../hooks/useFetchInitial';
import useFetch from '../hooks/useFetch';

function RenderRecipes({ redirectedFromIngredients }) {
  const dispatch = useDispatch();
  const { data, isLoading, error } = useFetchInitial(allFoods, allDrinks);
  const {
    foods,
    drinks,
    filterByCategory,
    toRender,
  } = useSelector((state) => state.fetchReceitas);
  const { recipes, type, name, image, id, linkToGo, filterByIngredient } = createRecipeObject(foods, drinks);

  const { data: filterIngredients } = useFetch(URLDictionary[filterByIngredient], redirectedFromIngredients);

  useEffect(() => {
    if (redirectedFromIngredients !== undefined && filterIngredients !== null) {
      dispatch(setToRender(filterIngredients[type]));
    } else {
      dispatch(setToRender(recipes));
    }

  }, [recipes]);

  async function fetchHandle() {
    let filterByType = filterByFoodCategory;
    if (type === 'drinks') {
      filterByType = filterByDrinkCategory;
    }
    const url = `${filterByType}${filterByCategory}`;
    const resp = await fetch(url);
    const result = await resp.json();
    if (filterByCategory === 'All') {
      dispatch(setToRender(recipes));
    } else {
      dispatch(setToRender(result[type]));
    }
  }

  useEffect(() => {
    fetchHandle();
  }, [filterByCategory]);

  if (error) return <p>{error}</p>;

  if (isLoading) return <p>Loading...</p>;

  if (data) {
    dispatch(setInitialRecipes(data));
  }

  const limitRecipes = 12;
  return (
    <section>
      {(type !== '' && recipes !== null)
        && toRender.slice(0, limitRecipes).map((recipe, index) => (
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
