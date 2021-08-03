import React, { useState, useEffect } from 'react';
import LowerMenu from '../components/LowerMenu';
import Header from '../components/Header';
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

  return (
    <div>
      <Header title="Explorar Ingredientes" renderButton />
      { ingredients ? JSON.stringify(ingredients) : 'Loading...' }
      <LowerMenu />
    </div>
  );
}
