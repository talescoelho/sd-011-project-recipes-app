import React, { useEffect, useState } from 'react';
import RecipeCard from '../components/MealRecipeCard';
import APImealById from '../services/APImealsANDdrinks';

// Falta implementar o await da promisse;
function RecipeDetails({ match: { params } }) {
  useEffect(() => {
    const { id } = params;
    setFetchAPI(APImealById(id));
  }, []);

  const [FetchAPI, setFetchAPI] = useState({});

  console.log(FetchAPI.meals[0].idMeal);
  return (
    <div>
      <RecipeCard />
    </div>
  );
}

export default RecipeDetails;
