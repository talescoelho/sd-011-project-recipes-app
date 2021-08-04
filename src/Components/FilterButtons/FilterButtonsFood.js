import React, { useState, useEffect, useContext } from 'react';
import { getFoodsCategory, getFoodsByCategory } from '../../Services/ApiFood';
import MainContext from '../../Context/MainContext';

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

  const { setFoodsByCategory } = useContext(MainContext);

  async function fetchFoodsByCategory(value) {
    const foodsByCategory = await getFoodsByCategory(value);
    setFoodsByCategory(foodsByCategory.meals);
  }

  return (
    <div>
      <button type="button">All</button>
      { categories.map((category, index) => index < limit && (
        <button
          type="button"
          value={ category.strCategory }
          data-testid={ `${category.strCategory}-category-filter` }
          onClick={ ({ target }) => fetchFoodsByCategory(target.value) }
        >
          { category.strCategory }
        </button>
      )) }
    </div>
  );
}

export default FilterButtonsFood;
