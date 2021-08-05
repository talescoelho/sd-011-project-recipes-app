import React, { useEffect, useState } from 'react';
import RecipeCard from '../components/MealRecipeCard';
import { APImealById } from '../services/APImealsANDdrinks';

// Falta implementar o await da promisse;
function RecipeDetails({ match: { params } }) {
  const [FetchAPI, setFetchAPI] = useState({});
  useEffect(() => {
    const { id } = params;
    setFetchAPI(APImealById(id));
  }, []);

  console.log(FetchAPI.meals[0].idMeal);
  return (
    <div>
      <RecipeCard />
    </div>
  );
}

export default RecipeDetails;
