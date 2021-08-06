import React, { useContext } from 'react';
import AppContext from '../context/AppContext';
import HeaderDetails from '../components/HeaderDetails';
import IngredientDetails from '../components/IngredientDetails';

function DrinkProcess() {
  const { idDetails } = useContext(AppContext);
  const details = idDetails[0];
  return (
    <div>
      {idDetails.length === 0 ? <span>Loading...</span> : (
        <div>
          <img
            data-testid="recipe-photo"
            src={ details.strDrinkThumb }
            alt="image_of_recipe"
          />
          <HeaderDetails foodOrDrink="Bebidas" />
          <IngredientDetails />
        </div>
      )}
    </div>
  );
}

export default DrinkProcess;
