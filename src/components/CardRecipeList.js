import React from 'react';
import { useHistory } from 'react-router';

import { RequestHook } from '../Context/RequestHook';

import CardRecipe from './CardRecipe';

function CardRecipeList() {
  const { filteredFood, filteredDrink } = RequestHook();
  const history = useHistory();
  const MAX_RESULT = 12;

  const local = window.location.href;
  const url = 'http://localhost:3000/comidas';
  let filterType = filteredFood;

  if (local !== url) {
    filterType = filteredDrink;
  }

  return (
    <div>
      { (filterType.length !== undefined && filterType.length === 1)
        && filterType.map((item) => (
          (filterType === filteredFood)
            ? history.push(`comidas/${item.idMeal}`)
            : history.push(`bebidas/${item.idDrink}`)
        )) }

      { (filterType.length !== undefined && filterType.length > 1)
        && filterType.slice(0, MAX_RESULT).map((item, index) => (
          <CardRecipe key={ index } item={ item } index={ index } />
        )) }

      {/* 
      { (filterType === undefined || filterType === {})
        && alert('Sinto muito, não encontramos nenhuma receita para esses filtros.') } */}

    </div>
  );
}

export default CardRecipeList;
