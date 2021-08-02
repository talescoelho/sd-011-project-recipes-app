import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { categoriesFetch, filterByCategorieFetch } from '../service/apiMainPageRecipe';

function Categories({ mealOrDrink }) {
  const dispatch = useDispatch();
  const stateReduxMainPage = useSelector(({ mainPageRecipe }) => mainPageRecipe);
  // const stateReduxSearch = useSelector(({ searchItems }) => searchItems);
  const mealsOrDrinks = mealOrDrink === 'meal' ? 'meals' : 'drinks';
  const limitCategories = 5;
  const [toggle, setToggle] = useState('');

  React.useEffect(() => {
    async function fetchDidMount() {
      dispatch(await categoriesFetch(mealOrDrink));
    }
    fetchDidMount();
  }, [dispatch, mealOrDrink]);
  return (
    <div>
      <button
        type="button"
        onClick={ async () => dispatch(await filterByCategorieFetch(mealOrDrink)) }
        data-testid="All-category-filter"
      >
        All
      </button>
      {!stateReduxMainPage.loading && stateReduxMainPage.dataApi[mealsOrDrinks]
        .map(({ strCategory }, i) => i < limitCategories && (
          <button
            key={ i }
            type="button"
            data-testid={ `${strCategory}-category-filter` }
            onClick={ async () => {
              if (toggle === '') {
                setToggle(strCategory);
                dispatch(
                  await filterByCategorieFetch(mealOrDrink, strCategory),
                );
              } else if (toggle === strCategory) {
                setToggle('');
                dispatch(await filterByCategorieFetch(mealOrDrink));
              } else {
                setToggle(strCategory);
                dispatch(await filterByCategorieFetch(mealOrDrink, strCategory));
              }
            } }
          >
            {strCategory}
          </button>))}
    </div>
  );
}

Categories.propTypes = {
  mealOrDrink: PropTypes.string.isRequired,
};

export default Categories;
