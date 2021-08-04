import React, { useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
// import Button from 'react-bootstrap/Button';
import HeaderDetails from '../components/HeaderDetails';
import AppContext from '../context/AppContext';
import IngredientDetails from '../components/IngredientDetails';
import Recomendation from '../components/Recomendation';
import ButtonDetails from '../components/ButtonDetails';

function DrinkDetails({ match }) {
  const { idDetails, setIdDetails } = useContext(AppContext);
  // const [button, setbutton] = useState(false);
  const { id } = match.params;

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
      <HeaderDetails foodOrDrink="Bebidas" />
      <IngredientDetails />
      <Recomendation foodOrDrink="Bebidas" />
      <ButtonDetails foodOrDrink="Bebidas" id={ id } />
    </div>

  );
}

export default DrinkDetails;

DrinkDetails.propTypes = {
  match: PropTypes.oneOfType([PropTypes.object]).isRequired,
};
