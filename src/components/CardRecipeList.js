import React, { useEffect } from 'react';
import { useHistory } from 'react-router';

import { RequestHook } from '../Context/RequestHook';

import CardRecipe from './CardRecipe';

import {
  searchFoodsAll,
} from '../services/RequestFood';

import {
  searchDrinksAll,
} from '../services/RequestDrinks';

function CardRecipeList() {
  const { filteredFood,
    filteredDrink,
    initialItensFood,
    setInitialItensFood,
    initialItensDrink,
    setInitialItensDrink,
  } = RequestHook();
  const history = useHistory();
  const MAX_RESULT = 12;

  const local = window.location.href;
  const url = 'http://localhost:3000/comidas';
  let filterType = filteredFood;

  if (local !== url) {
    filterType = filteredDrink;
  }

  async function getInitialItensDrinkAndFood(filterText) {
    let items;
    if (!filterText) return;
    if (filterType === filteredFood) {
      items = await searchFoodsAll();
      setInitialItensFood(items);
    } else if (filterType === filteredDrink) {
      items = await searchDrinksAll();
      setInitialItensDrink(items);
    }
  }

  useEffect(() => {
    if (filterType === filteredFood) {
      getInitialItensDrinkAndFood('b');
    } else if (filterType === filteredDrink) {
      getInitialItensDrinkAndFood('c');
    }
  }, []);

  return (
    <div>
      { (filterType.length === 1)
        && filterType.map((item) => (
          (filterType === filteredFood)
            ? history.push(`comidas/${item.idMeal}`)
            : history.push(`bebidas/${item.idDrink}`)
        )) }

      { (filterType.length > 1)
        && filterType.slice(0, MAX_RESULT).map((item, index) => (
          <CardRecipe key={ index } item={ item } index={ index } />
        )) }

      { filterType === filteredFood && initialItensFood
        .slice(0, MAX_RESULT)
        .map((item, index) => (
          <CardRecipe key={ index } item={ item } index={ index } />
        )) }

      { filterType === filteredDrink && initialItensDrink
        .slice(0, MAX_RESULT)
        .map((item, index) => (
          <CardRecipe key={ index } item={ item } index={ index } />
        )) }

    </div>
  );
}

export default CardRecipeList;
