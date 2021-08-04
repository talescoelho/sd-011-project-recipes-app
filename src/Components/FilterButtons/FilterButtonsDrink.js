import React, { useState, useEffect } from 'react';
import { getDrinksCategory } from '../../Services/ApiDrink';

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

  return (
    <div>
      <button type="button">All</button>
      { categories.map((category, index) => index < limit && (
        <button
          type="button"
          data-testid={ `${category.strCategory}-category-filter` }
        >
          { category.strCategory }
        </button>
      )) }
    </div>
  );
}

export default FilterButtonsDrink;
