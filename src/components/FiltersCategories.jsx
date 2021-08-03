import React, { useEffect, useState, useContext } from 'react';
import '../styles/FiltersCategories.css';
import { useHistory } from 'react-router-dom';
import RecipesContext from '../context/RecipesContext';

function FiltersCategories() {
  const history = useHistory();
  const { location: { pathname } } = history;
  const [categories, setCategories] = useState([]);
  const { setCompare } = useContext(RecipesContext);

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
  }, [pathname]);

  async function categoryFilter({ target }) {
    console.log(target.name);
    const doze = 12;
    if (pathname === '/comidas') {
      const ConsultAPICategories = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${target.name}`);
      const response = await ConsultAPICategories.json();
      const { meals } = response;
      setCompare(!meals ? [] : meals.slice(0, doze));
      console.log(meals);
    }
    if (pathname === '/bebidas') {
      const ConsultAPICategories = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${target.name}`);
      const response = await ConsultAPICategories.json();
      const { drinks } = response;
      setCompare(!drinks ? [] : drinks.slice(0, doze));
      console.log(drinks);
    }
  }

  return (
    <div className="container-categories">
      {categories.map((category, index) => (
        <button
          data-testid={ `${category.strCategory}-category-filter` }
          className="button-categories"
          type="button"
          name={ category.strCategory }
          key={ index }
          onClick={ (e) => categoryFilter(e) }
        >
          {category.strCategory}
        </button>))}
    </div>
  );
}

export default FiltersCategories;
