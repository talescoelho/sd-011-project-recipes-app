import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getRecipes } from '../redux/slices/fetchReceitas';

function RenderFoodAreaOptions() {
  const { foodAreaList } = useSelector((state) => state.fetchReceitas);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRecipes('foodAreaList'));
  }, [dispatch]);

  if (foodAreaList.length !== 0) {
    return (
      <label htmlFor="recipe-origin">
        <select
          id="recipe-origin"
          data-testid="explore-by-area-dropdown"
        >
          {foodAreaList.meals.map(({ strArea }, index) => (
            <option key={ index }>{strArea}</option>
          ))}
        </select>
      </label>

    );
  }
  return null;
}

export default RenderFoodAreaOptions;
