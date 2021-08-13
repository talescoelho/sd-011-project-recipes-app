import React, { useContext } from 'react';
import HeaderRecipesDone from '../Components/headers/HeaderRecipesDone';
import RecipeDone from '../Components/FilterButtons/RecipeDone';
import MainContext from '../Context/MainContext';

function RecipesDone() {
  const { setFilterDone } = useContext(MainContext);

  function handleClick({ value }) {
    setFilterDone(value);
  }

  return (
    <div>
      <HeaderRecipesDone />
      <button
        type="button"
        data-testid="filter-by-all-btn"
        value="All"
        onClick={ (e) => handleClick(e.target) }
      >
        All
      </button>
      <button
        type="button"
        data-testid="filter-by-food-btn"
        value="Foods"
        onClick={ (e) => handleClick(e.target) }
      >
        Food
      </button>
      <button
        type="button"
        data-testid="filter-by-drink-btn"
        value="Drinks"
        onClick={ (e) => handleClick(e.target) }
      >
        Drinks
      </button>
      <RecipeDone />
    </div>
  );
}

export default RecipesDone;
