import React, { useState, useEffect } from 'react';
import { getCategoriesDrink } from '../services/RequestDrinks';
import { getCategoriesFood } from '../services/RequestFood';

function NavCategories() {
  const [category, setCategory] = useState([]);

  const local = window.location.href;
  const url = 'http://localhost:3000/comidas';
  const MAX_RESULT = 5;
  
  async function getCategoriesDrinkAndFood() {
    if (local === url) {
    const items = await getCategoriesFood();
    setCategory(items);
    } else {
      const itemsDrink = await getCategoriesDrink();
    setCategory(itemsDrink);
    }
  }

useEffect(() => {
  getCategoriesDrinkAndFood();
  
}, [])

  return (
    <div>
      { console.log(category) }
      { !category ? <p>Loading...</p> : category.slice(0, MAX_RESULT)
        .map((item, index) => (
          <button type="button" key={ index } data-testid={`${item.strCategory}-category-filter`} >
            { item.strCategory }
          </button>
        )) }
    </div>
  )
}

export default NavCategories;
