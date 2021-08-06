import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import AppContext from '../context/AppContext';
import HeaderDetails from '../components/HeaderDetails';
import IngredientDetails from '../components/IngredientDetails';

function DrinkProcess() {
  const { setIdDetails } = useContext(AppContext);
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
    () => { fetchDrinkProcess(); }, [],
  );
  return (
    <div>
      {loading ? <span>Loading...</span> : (
        <div>
          <HeaderDetails foodOrDrink="Bebidas" />
          <IngredientDetails inProcess />
        </div>
      )}
    </div>
  );
}

export default DrinkProcess;
