import React, { useState, useEffect, useContext } from 'react';
import { getDrinksCategory, getDrinksByCategory } from '../../Services/ApiDrink';
import MainContext from '../../Context/MainContext';

function FilterButtonsDrink() {
  const limit = 5;
  const [categories, setCategories] = useState([]);

  async function fetchCategories() {
    const drinksCategoryAPI = await getDrinksCategory();
    setCategories(drinksCategoryAPI.drinks);
  }

  useEffect(() => {
    fetchCategories();
  }, []);

  const { setDrinksByCategory } = useContext(MainContext);

  async function fetchDrinksByCategory(value) {
    const drinksByCategory = await getDrinksByCategory(value);
    setDrinksByCategory(drinksByCategory.drinks);
  }

  return (
    <div>
      <button type="button">All</button>
      { categories.map((category, index) => index < limit && (
        <button
          type="button"
          value={ category.strCategory }
          data-testid={ `${category.strCategory}-category-filter` }
          onClick={ ({ target }) => fetchDrinksByCategory(target.value) }
        >
          { category.strCategory }
        </button>
      )) }
    </div>
  );
}

export default FilterButtonsDrink;
