import React, { useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import HeaderDetails from '../components/HeaderDetails';
import AppContext from '../context/AppContext';
import IngredientDetails from '../components/IngredientDetails';
import Recomendation from '../components/Recomendation';
import ButtonDetails from '../components/ButtonDetails';

function FoodDetails({ match }) {
  const { idDetails, setIdDetails } = useContext(AppContext);
  const { id } = match.params;

  async function fetchFoodDetails() {
    const endPoint = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`;
    const request = await fetch(endPoint);
    const response = await request.json();
    const data = response.meals;
    setIdDetails(data);
  }

  useEffect(
    () => { fetchFoodDetails(); }, [],
  );

  if (idDetails.length === 0) return <div>Loading...</div>;

  // console.log('details', idDetails[0].strYoutube);
  return (
    <div>
      <HeaderDetails foodOrDrink="Comidas" />
      <IngredientDetails />
      <video data-testid="video" src={ idDetails[0].strYoutube }>
        <track
          kind="captions"
        />
      </video>
      <Recomendation foodOrDrink="Comidas" />

      <ButtonDetails foodOrDrink="Comidas" id={ id } />

    </div>
  );
}

export default FoodDetails;

FoodDetails.propTypes = {
  match: PropTypes.oneOfType([PropTypes.object]).isRequired,
};
