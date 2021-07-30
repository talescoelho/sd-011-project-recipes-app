import PropTypes from 'prop-types';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { categoriesFetch } from '../service/apiMainPageRecipe';

function Categories({ mealOrDrink }) {
  const dispatch = useDispatch();
  const stateReduxMainPage = useSelector(({ mainPageRecipe }) => mainPageRecipe);
  const mealsOrDrinks = mealOrDrink === 'meal' ? 'meals' : 'drinks';
  const limitCategories = 5;

  React.useEffect(() => {
    async function fetchDidMount() {
      dispatch(await categoriesFetch(mealOrDrink));
    }
    fetchDidMount();
  }, [dispatch, mealOrDrink]);
  console.log(stateReduxMainPage);
  return (
    <div>
      <button type="button">All</button>
      {!stateReduxMainPage.loading && stateReduxMainPage.dataApi[mealsOrDrinks]
        .map(({ strCategory }, i) => i < limitCategories && (
          <button
            key={ i }
            type="button"
            data-testid={ `${strCategory}-category-filter` }
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
