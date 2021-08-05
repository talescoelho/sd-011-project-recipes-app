import React from 'react';
import { useHistory } from 'react-router';

import { RequestHook } from '../Context/RequestHook';

import CardRecipe from './CardRecipe';

function CardRecipeList() {
  const { filteredFood, filteredDrink } = RequestHook();
  const history = useHistory();

  const local = window.location.href;
  const url = 'http://localhost:3000/comidas';
  let filterType = filteredFood;

  if (local !== url) {
    filterType = filteredDrink;
  }

  return (
    <div>
      { (filterType.length === 1)
        && filterType.map((item) => (
          (filterType === filteredFood)
            ? history.push(`comidas/${item.idMeal}`)
            : history.push(`bebidas/${item.idDrink}`)
        )) }

      { filterType.length > 1
        ? filterType.map((item, index) => (
          <CardRecipe key={ index } item={ item } />
        ))
        : '' }
    </div>
  );
}

export default CardRecipeList;
