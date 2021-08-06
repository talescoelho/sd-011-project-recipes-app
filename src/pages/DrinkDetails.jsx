import React, { useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import HeaderDetails from '../components/HeaderDetails';
import AppContext from '../context/AppContext';
import IngredientDetails from '../components/IngredientDetails';
import Recomendation from '../components/Recomendation';
import ButtonDetails from '../components/ButtonDetails';

function DrinkDetails() {
  const { idDetails, setIdDetails } = useContext(AppContext);
  const details = idDetails[0];
  const { id } = useParams();
  console.log('id', id);

  async function fetchDrinkDetails() {
    const endPoint = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`;
    const request = await fetch(endPoint);
    const response = await request.json();
    const data = response.drinks;
    setIdDetails(data);
    console.log('teste', data);
  }

  useEffect(
    () => { fetchDrinkDetails(); }, [],
  );

  if (idDetails.length === 0) return <div>Loading...</div>;

  return (
    <div>
      <img
        data-testid="recipe-photo"
        src={ details.strDrinkThumb }
        alt="image_of_recipe"
      />
      <HeaderDetails foodOrDrink="Bebidas" id={ id } />
      <IngredientDetails />
      <Recomendation foodOrDrink="Bebidas" id={ id } />
      <ButtonDetails foodOrDrink="Bebidas" id={ id } />
    </div>

  );
}

export default DrinkDetails;
