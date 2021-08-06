import React, { useEffect, useState } from 'react';
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
  const { filteredFood, filteredDrink } = RequestHook();
  const history = useHistory();
  const MAX_RESULT = 12;
  const [initialItensFood, setInitialItensFood] = useState([]);
  const [initialItensDrink, setInitialItensDrink] = useState([]);

  const local = window.location.href;
  const url = 'http://localhost:3000/comidas';
  let filterType = filteredFood;

  if (local !== url) {
    filterType = filteredDrink;
  }

  async function getInitialItensFood(filterText) {
    if (!filterText) return;
    const items = await searchFoodsAll();
    setInitialItensFood(items);
  }

  async function getInitialItensDrink(filterText) {
    if (!filterText) return;
    const items = await searchDrinksAll();
    setInitialItensDrink(items);
  }

  useEffect(() => {
    if (filterType === filteredFood) {
      getInitialItensFood('b');
    } else if (filterType === filteredDrink) {
      getInitialItensDrink('c');
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
