import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { getCategoriesDrink, searchByCategoryDrink } from '../services/RequestDrinks';
import { getCategoriesFood, searchByCategoryFood } from '../services/RequestFood';
import { RequestHook } from '../Context/RequestHook';

function NavCategories({ origin }) {
  const [category, setCategory] = useState([]);
  const { setFiltered, setByCategory } = RequestHook();
  const MAX_RESULT = 5;

  useEffect(() => {
    async function loadCategories() {
      if (origin === 'Food') {
        const request = await getCategoriesFood();
        setCategory(request);
      } else if (origin === 'Drink') {
        const request = await getCategoriesDrink();
        setCategory(request);
      }
    }
    loadCategories();
  }, []);

  async function searchByCategory(text) {
    let items;
    if (origin === 'Food') {
      if (text === 'All') {
        items = await getCategoriesFood();
      }
      items = await searchByCategoryFood(text);
    } else if (origin === 'Drink') {
      if (text === 'All') {
        items = await getCategoriesDrink();
      }
      items = await searchByCategoryDrink(text);
    }
    setFiltered(items);
  }

  return (
    <div>
      { category ? category.length >= 1 && category.slice(0, MAX_RESULT)
        .map((item, index) => (
          <button
            type="button"
            key={ index }
            data-testid={ `${item.strCategory}-category-filter` }
            value={ item.strCategory }
            onClick={ (e) => {
              searchByCategory(e.target.value);
              setByCategory((state) => !state);
            } }
          >
            { item.strCategory }
          </button>
        )) : <p>Loading...</p> }

      <button
        type="button"
        data-testid="All-category-filter"
        value="All"
        onClick={ (e) => {
          searchByCategory(e.target.value);
          setByCategory((state) => !state);
        } }
      >
        All
      </button>
    </div>
  );
}

NavCategories.propTypes = {
  origin: PropTypes.string.isRequired,
};

export default NavCategories;
