import React, { useState, useEffect } from 'react';
import LowerMenu from '../components/LowerMenu';
import Header from '../components/Header';
import IngredientsCard from '../components/IngredientsCard';
import { fetchIngredientsFromMealsDB } from '../services';

export default function ExploreMealsByIngredients() {
  const [ingredients, setIngredients] = useState([]);

  const getIngredients = async () => {
    const ingredientsData = await fetchIngredientsFromMealsDB();
    setIngredients(ingredientsData);
  };

  useEffect(() => {
    getIngredients();
  }, []);

  if (!ingredients.length) return <h2>Loading...</h2>;

  return (
    <div>
      <Header title="Explorar Ingredientes" renderButton />
      <div className="ingredients">
        {
          ingredients.map((ing, index) => {
            const ingredientsObject = { name: ing.strIngredient, index, api: 'meals' };
            return <IngredientsCard key={ index } ingredient={ ingredientsObject } />;
          })
        }
      </div>
      <LowerMenu />
    </div>
  );
}
