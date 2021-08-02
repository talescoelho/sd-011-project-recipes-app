import React, { useEffect, useState } from 'react';
import '../styles/FiltersCategories.css';
import { useHistory } from 'react-router-dom';

function FiltersCategories() {
  const history = useHistory();
  const { location: { pathname } } = history;
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const requisitionFilters = async () => {
      const cinco = 5;
      if (pathname === '/comidas') {
        const response = await fetch('https://www.themealdb.com/api/json/v1/1/list.php?c=list');
        const responseFoods = await response.json();
        const { meals } = responseFoods;
        console.log(meals);
        return setCategories(meals.slice(0, cinco));
      }
      if (pathname === '/bebidas') {
        const response = await fetch('https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list');
        const responseDrinks = await response.json();
        const { drinks } = responseDrinks;
        console.log(drinks);
        return setCategories(drinks.slice(0, cinco));
      }
    };
    requisitionFilters();
  }, []);

  return (
    <div className="container-categories">
      {categories.map((category, index) => (
        <button
          data-testid={ `${category.strCategory}-category-filter` }
          className="button-categories"
          type="button"
          key={ index }
        >
          {category.strCategory}
        </button>))}
    </div>
  );
}

export default FiltersCategories;
