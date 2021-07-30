import React, { useState, useEffect } from 'react';

export default function ButtonFoodsCategories() {
  const [categories, setCategories] = useState([]);

  async function categoriesFood() {
    const endpoint = 'https://www.themealdb.com/api/json/v1/1/list.php?c=list';
    const response = await fetch(endpoint);
    const json = await response.json();
    console.log(json);
    setCategories(json);
  }

  useEffect(() => {
    categoriesFood();
  }, []);
  const maxArray = 5;
  return (
    <div>
      {categories.length === 0 ? <p>Loading</p>
        : categories.meals.slice(0, maxArray).map((categorie, index) => (
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
