import React, { useState, useEffect } from 'react';
import { getCategoriesDrink, searchByCategoryDrink } from '../services/RequestDrinks';
import { getCategoriesFood, searchByCategoryFood } from '../services/RequestFood';
import { RequestHook } from '../Context/RequestHook';

function NavCategories() {
  const [category, setCategory] = useState([]);
  const {
    setInitialItensFood,
    setInitialItensDrink,
  } = RequestHook();

  const local = window.location.href;
  const url = 'http://localhost:3000/comidas';
  const MAX_RESULT = 5;

  async function getCategoriesDrinkAndFood() {
    if (local === url) {
      const items = await getCategoriesFood();
      setCategory(items);
    } else {
      const itemsDrink = await getCategoriesDrink();
      setCategory(itemsDrink);
    }
  }

  useEffect(() => {
    getCategoriesDrinkAndFood();
  }, [setInitialItensFood, setInitialItensDrink]);

  async function searchByCategoryDrinkAndFood(text) {
    if (local === url) {
      const items = await searchByCategoryFood(text);
      setInitialItensFood(items);
    } else {
      const itemsDrink = await searchByCategoryDrink(text);
      setInitialItensDrink(itemsDrink);
    }
  }

  async function searchAllCategories() {
    if (local === url) {
      const items = await getCategoriesFood();
      setInitialItensFood(items);
    } if (local !== url) {
      const itemsDrink = await getCategoriesDrink();
      setInitialItensDrink(itemsDrink);
    }
  }

  return (
    <div>
      <button
        type="button"
        data-testid="All-category-filter"
        onClick={ () => searchAllCategories() }
      >
        All
      </button>
      { category.slice(0, MAX_RESULT)
        .map((item, index) => (
          <button
            type="button"
            key={ index }
            data-testid={ `${item.strCategory}-category-filter` }
            onClick={ (e) => searchByCategoryDrinkAndFood(e.target.value) }
            value={ item.strCategory }
          >
            { item.strCategory }
          </button>
        )) }
    </div>
  );
}

export default NavCategories;
