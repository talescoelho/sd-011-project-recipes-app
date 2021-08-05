import React, { useContext } from 'react';
import AppContext from '../context/AppContext';
import HeaderDetails from '../components/HeaderDetails';
import IngredientDetails from '../components/IngredientDetails';

function DrinkProcess() {
  const { idDetails } = useContext(AppContext);
  console.log(idDetails);
  return (
    <div>
      {idDetails.length === 0 ? <span>Loading...</span> : (
        <div>
          <HeaderDetails foodOrDrink="Bebidas" />
          <IngredientDetails />
        </div>
      )}
    </div>
  );
}

export default DrinkProcess;
