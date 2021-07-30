import React, { useState, useEffect } from 'react';

export default function ButtonDrinksCategories() {
  const [categories, setCategories] = useState([]);

  async function categoriesDrinks() {
    const endpoint = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list';
    const response = await fetch(endpoint);
    const json = await response.json();
    console.log(json);
    setCategories(json);
  }

  useEffect(() => {
    categoriesDrinks();
  }, []);
  const maxArray = 5;
  return (
    <div>
      {categories.length === 0 ? <p>Loading</p>
        : categories.drinks.slice(0, maxArray).map((categorie, index) => (
          <div key={ index } data-testid={ `${index}-recipe-card` }>
            <button
              type="button"
              data-testid={ `${categorie.strCategory}-category-filter` }
            >
              {categorie.strCategory}
            </button>
          </div>
        ))}
    </div>
  );
}
