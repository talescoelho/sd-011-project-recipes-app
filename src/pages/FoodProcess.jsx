import React, { useContext, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import HeaderDetails from '../components/HeaderDetails';
import IngredientDetails from '../components/IngredientDetails';
import AppContext from '../context/AppContext';
import '../styles/carousel.css';

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
    () => {
      const ingredients = idDetails.length >= 1 && Object.keys(idDetails[0])
        .filter((el) => el.includes('strIngredient'));
      const measure = idDetails.length >= 1
      && Object.keys(idDetails[0]).filter((el) => el.includes('strMeasure'));
      const ingredientList = ingredients && ingredients
        .filter((el) => idDetails[0][el])
        .map((ing, index) => `${idDetails[0][ing]} - ${idDetails[0][measure[index]]}`);
      console.log(ingredientList);
    }, [idDetails],
  );

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
          <HeaderDetails foodOrDrink="Comidas" id={ id } />
          <IngredientDetails inProcess food />
        </div>
      )}
    </div>
  );
}

export default FoodProcess;
