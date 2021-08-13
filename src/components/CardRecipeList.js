import React, { useEffect } from 'react';
import { useHistory } from 'react-router';
import PropTypes from 'prop-types';
import { RequestHook } from '../Context/RequestHook';
import CardRecipe from './CardRecipe';
import { searchFoodsAll, searchByIngredient } from '../services/RequestFood';
import { searchDrinksAll, searchDrinkByIngredient } from '../services/RequestDrinks';

function CardRecipeList({ origin, text }) {
  const { categorized, filtered, initialItens, setInitialItens } = RequestHook();
  const MAX_RESULT = 12;
  const history = useHistory();

  async function loadInitialItens() {
    let request;
    if (text !== '') {
      if (origin === 'Food') {
        request = await searchByIngredient(text);
      } else {
        request = await searchDrinkByIngredient(text);
      }
    }
    if (origin === 'Food') {
      request = await searchFoodsAll();
    } else {
      request = await searchDrinksAll();
    }
    setInitialItens(request);
  }

  useEffect(() => {
    loadInitialItens();
  }, []);

  function renderItems(array) {
    if (array.length === 1) {
      if (origin === 'Food') {
        return (history.push(`comidas/${array[0].idMeal}`));
      }
      return (history.push(`bebidas/${array[0].idDrink}`));
    }
    return (
      array.slice(0, MAX_RESULT).map((item, index) => (
        <CardRecipe key={ index } item={ item } index={ index } />)));
  }

  return (
    <div>
      { categorized ? renderItems(filtered) : renderItems(initialItens) }
    </div>
  );
}

CardRecipeList.propTypes = {
  origin: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default CardRecipeList;
