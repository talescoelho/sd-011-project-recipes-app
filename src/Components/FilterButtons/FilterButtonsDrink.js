import React, { useState, useEffect, useContext } from 'react';
import {
  getDrinksCategory,
  getDrinksByCategory,
  getDrinksInitial } from '../../Services/ApiDrink';
import MainContext from '../../Context/MainContext';

function FilterButtonsDrink() {
  const limit = 5;
  const [categorySelected, setCategorySelected] = useState('');
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
    if (categorySelected === value || value === 'all') {
      const drinksInitialAPI = await getDrinksInitial();
      setDrinksByCategory(drinksInitialAPI.drinks);
    } else {
      setCategorySelected(value);
      const drinksByCategory = await getDrinksByCategory(value);
      setDrinksByCategory(drinksByCategory.drinks);
    }
  }

  return (
    <div>
      <button
        type="button"
        data-testid="All-category-filter"
        value="all"
        onClick={ ({ target }) => fetchDrinksByCategory(target.value) }
      >
        All
      </button>
      { categories.map((category, index) => index < limit && (
        <button
          key={ index }
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
