import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import AppContext from '../context/AppContext';
import HeaderDetails from '../components/HeaderDetails';
import IngredientDetails from '../components/IngredientDetails';

function DrinkProcess() {
  const { setIdDetails, idDetails } = useContext(AppContext);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  async function fetchDrinkProcess() {
    const endPoint = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`;
    const request = await fetch(endPoint);
    const response = await request.json();
    const data = response.drinks;
    console.log(data);
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
    () => { fetchDrinkProcess(); }, [],
  );

  return (
    <div>
      {loading ? <span>Loading...</span> : (
        <div>
          <img
            data-testid="recipe-photo"
            src={ idDetails[0].strDrinkThumb }
            alt="image_of_recipe"
          />
          <HeaderDetails foodOrDrink="Bebidas" id={ id } />
          <IngredientDetails inProcess drink />
        </div>
      )}
    </div>
  );
}

export default DrinkProcess;
