import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import HeaderDetails from '../components/HeaderDetails';
import IngredientDetails from '../components/IngredientDetails';
import AppContext from '../context/AppContext';

function FoodProcess() {
  const { setIdDetails, idDetails } = useContext(AppContext);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  async function fetchFoodProcess() {
    const endPoint = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`;
    const request = await fetch(endPoint);
    const response = await request.json();
    const data = response.meals;
    setIdDetails(data);
    setLoading(false);
  }

  useEffect(
    () => { fetchFoodProcess(); }, [],
  );

  return (
    <div>
      {loading ? <span>Loading...</span> : (
        <div>
          <img
            data-testid="recipe-photo"
            src={ idDetails[0].strMealThumb }
            alt="image_of_recipe"
          />
          <HeaderDetails foodOrDrink="Comidas" />
          <IngredientDetails inProcess />
        </div>
      )}
    </div>
  );
}

export default FoodProcess;
