import React, { useContext } from 'react';
import AppContext from '../context/AppContext';
import HeaderDetails from '../components/HeaderDetails';
import IngredientDetails from '../components/IngredientDetails';

function FoodProcess() {
  const { idDetails } = useContext(AppContext);
  console.log(idDetails);
  return (
    <div>
      {idDetails.length === 0 ? <span>Loading...</span> : (
        <div>
          <HeaderDetails foodOrDrink="Comidas" />
          <IngredientDetails />
        </div>
      )}
    </div>
  );
}

export default FoodProcess;
