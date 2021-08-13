import React, { useEffect } from 'react';
import { useHistory } from 'react-router';
import PropTypes from 'prop-types';
import { RequestHook } from '../Context/RequestHook';
import CardRecipe from './CardRecipe';
import { searchFoodsAll, searchByIngredient } from '../services/RequestFood';
import { searchDrinksAll, searchDrinkByIngredient } from '../services/RequestDrinks';

function CardRecipeList({ text }) {
  const {
    filteredFood,
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

  console.log(text);
  if (local !== url) {
    filterType = filteredDrink;
  }

  async function getInitialItensDrinkAndFood() {
    if (text !== '') {
      const request = await searchByIngredient(text);
      setInitialItensFood(request);
      console.log(request);
    }
  //   if (filterType === filteredFood) {
  //     setInitialItensFood([]);
  //     const itemsFood = await searchFoodsAll();
  //     setInitialItensFood(itemsFood);
  //   } else if (filterType === filteredDrink) {
  //     setInitialItensDrink([]);
  //     const itemsDrink = await searchDrinksAll();
  //     setInitialItensDrink(itemsDrink);
  //   }
  }

  useEffect(() => {
    getInitialItensDrinkAndFood();
  }, []);

  return (
    <div>
      {/* { (filterType.length === 1)
        && filterType.map((item) => (
          (filterType === filteredFood)
            ? history.push(`comidas/${item.idMeal}`)
            : history.push(`bebidas/${item.idDrink}`)
        )) }

      { (filterType.length > 1)
        && filterType.slice(0, MAX_RESULT).map((item, index) => (
          <CardRecipe key={ index } item={ item } index={ index } />
        )) } */}

      {/* carregar 12 primeiros itens */ }
      { (initialItensFood && initialItensFood.length >= 1)
        && initialItensFood.slice(0, MAX_RESULT)
          .map((item, index) => (
            <CardRecipe key={ index } item={ item } index={ index } />
          )) }

      { (initialItensDrink.length >= 1)
        && initialItensDrink.slice(0, MAX_RESULT)
          .map((item, index) => (
            <CardRecipe key={ index } item={ item } index={ index } />
          )) }
    </div>
  );
}

CardRecipeList.propTypes = {
  text: PropTypes.string.isRequired,
};

export default CardRecipeList;
