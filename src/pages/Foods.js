import React from 'react';
import { useSelector } from 'react-redux';
import Header from '../components/Header';
import RenderRecipes from '../components/RenderRecipes';

export default function Foods() {
  const qty = 12;
  const recipes = useSelector((state) => state.Mechanics.searcResults);
  return (
    <main>
      <Header title="Comidas" haveSearchBtn searchTrigger="themealdb" />
      <div className="card-container">
        {
          recipes.meals !== undefined
            ? recipes.meals.slice(0, qty).map((recipe, index) => (
              <RenderRecipes
                key={ index }
                title={ recipe.strMeal }
                index={ index }
                srcImage={ recipe.strMealThumb }
              />))
            : 'aa'
        }
      </div>
    </main>
  );
}
