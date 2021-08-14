import React, { useEffect } from 'react';
import { useHistory } from 'react-router';
import PropTypes from 'prop-types';
import { RequestHook } from '../Context/RequestHook';
import CardRecipe from './CardRecipe';
import { searchFoodsAll, searchByIngredient } from '../services/RequestFood';
import { searchDrinksAll, searchDrinkByIngredient } from '../services/RequestDrinks';

function CardRecipeList({ origin }) {
  const {
    byCategory,
    ingredient,
    filtered,
    initialItens,
    setInitialItens } = RequestHook();

  const MAX_RESULT = 12;
  const history = useHistory();

  async function loadInitialItens() {
    let request;
    if (ingredient !== '') {
      if (origin === 'Food') {
        request = await searchByIngredient(ingredient);
        console.log('food ingre');
      } else {
        request = await searchDrinkByIngredient(ingredient);
        console.log('drink ingre');
      }
    } else if (origin === 'Food') {
      request = await searchFoodsAll();
      console.log('food');
    } else {
      request = await searchDrinksAll();
      console.log('drink');
    }
    setInitialItens(request);
  }

  useEffect(() => {
    loadInitialItens();
    console.log('load');
  }, []);

  function renderItems(array) {
    if (array && array.length === 1) {
      if (origin === 'Food') {
        return (history.push(`comidas/${array[0].idMeal}`));
      }
      return (history.push(`bebidas/${array[0].idDrink}`));
    }
    return (
      array && array.slice(0, MAX_RESULT).map((item, index) => (
        <CardRecipe key={ index } item={ item } index={ index } />)));
  }

  return (
    <div>
      { byCategory ? renderItems(filtered) : renderItems(initialItens) }
    </div>
  );
}

CardRecipeList.propTypes = {
  origin: PropTypes.string.isRequired,
};

export default CardRecipeList;
