import React, { useState, useEffect } from 'react';

function RenderFoods() {
  const [receiveFoodRecipes, setReceiveFoodRecipes] = useState(undefined);

  useEffect(() => {
    const fetchRenderMeals = async () => {
      const response = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=');
      const json = await response.json();
      setReceiveFoodRecipes(json);
    };
    fetchRenderMeals();
  }, []);

  if (!receiveFoodRecipes) return <p>Carregando...</p>;
  const maxLength = 12;
  const filterRecipes = receiveFoodRecipes.meals
    .filter((item, index) => index < maxLength);
  return (
    <div>
      { filterRecipes.map((meal, index) => (
        <div key={ index }>
          <h1
            data-testid={ `${index}-card-name` }
          >
            { meal.strMeal }
          </h1>
          <img
            src={ meal.strMealThumb }
            alt={ meal.idMeal }
            data-testid={ `${index}-card-img` }
          />
          <h2 data-testid={ `${index}-recipe-card` }>{ meal.strInstructions }</h2>
        </div>
      )) }
    </div>
  );
}

export default RenderFoods;
