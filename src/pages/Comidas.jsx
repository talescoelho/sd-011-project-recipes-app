import React, { useState, useEffect } from 'react';

import CategoryFilters from '../components/CategoryFilters';
// import FoodCard from '../components/FoodCard';
import '../styles/Comidas.css';

function Comidas() {
  const [mealsRecipes, setMealsRecipes] = useState([]);
  useEffect(() => {
    const fetchFoods = async () => {
      const response = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=');
      const { meals } = await response.json();
      setMealsRecipes(meals);
    };
    fetchFoods();
  }, []);

  console.log(mealsRecipes);
  return (
    <>
      <CategoryFilters />
      <div className="foodRecipesContainer">
        {
          mealsRecipes.map((recipe, index) => <h1 key={ index }>{ recipe.idMeal }</h1>)
        }
      </div>
    </>
  );
}

export default Comidas;
