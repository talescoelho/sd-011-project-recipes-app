import React, { useState, useEffect } from 'react';
import { getFoodsCategory } from '../../Services/ApiFood';

function FilterButtonsFood() {
  const limit = 5;
  const [categories, setCategories] = useState([]);

  async function fetchCategories() {
    const foodsCategoryAPI = await getFoodsCategory();
    setCategories(foodsCategoryAPI.meals);
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

export default FilterButtonsFood;
