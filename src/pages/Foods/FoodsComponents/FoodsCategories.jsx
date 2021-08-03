import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMealsByCategories, fetchMealsCategories,
  getMealCategory, setMealToogle } from '../../../redux/actions';

function FoodsCategories() {
  const { mealsCategories } = useSelector((state) => state.MealsCategories);
  const { selectedCategory } = useSelector((state) => state.MealsByCategories);
  const dispatch = useDispatch();
  const max = 5;

  React.useEffect(() => {
    async function getCategories() {
      await dispatch(fetchMealsCategories());
    }
    getCategories();
  }, [dispatch]);

  function handleClick(value) {
    async function getMealsByCategories() {
      await dispatch(fetchMealsByCategories(value));
    }
    getMealsByCategories();
  }

  return (
    <>
      <button
        type="button"
        data-testid="All-category-filter"
        onClick={ () => {
          dispatch(setMealToogle(false));
          dispatch(getMealCategory(''));
        } }
      >
        All
      </button>
      {mealsCategories.meals && mealsCategories.meals.filter((_, index) => index < max)
        .map((item, index) => (
          <button
            data-testid={ `${item.strCategory}-category-filter` }
            type="button"
            key={ index }
            value={ item.strCategory }
            onClick={ ({ target }) => {
              handleClick(target.value);
              dispatch(getMealCategory(target.value));
              if (target.value === selectedCategory) {
                dispatch(setMealToogle(false));
              } else {
                dispatch(setMealToogle(true));
              }
            } }
          >
            {item.strCategory}
          </button>
        ))}
    </>
  );
}

export default FoodsCategories;
