import React, { useEffect, useState } from 'react';
import RecipeCard from '../components/MealRecipeCard';
import { APImealById } from '../services/APImealsANDdrinks';

// Falta implementar o await da promisse;
function RecipeDetails({ match: { params } }) {
  const [FetchAPI, setFetchAPI] = useState([]);
  useEffect(() => {
    const { id } = params;
    const requestMeal = async () => {
      const response = await APImealById(id);
      setFetchAPI(response.meals[0]);
    };
    requestMeal();
  }, []);

  console.log(FetchAPI.idMeal);
  // Adicionar loading
  // 
  return (
    <div>
      <RecipeCard />
    </div>
  );
}

export default RecipeDetails;
