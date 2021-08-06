import React, { useContext } from 'react';
import AppContext from '../context/AppContext';
import HeaderDetails from '../components/HeaderDetails';
import IngredientDetails from '../components/IngredientDetails';

function FoodProcess() {
  const { idDetails } = useContext(AppContext);
  const details = idDetails[0];
  console.log(idDetails);
  return (
    <div>
      {idDetails.length === 0 ? <span>Loading...</span> : (
        <div>
          <img
            data-testid="recipe-photo"
            src={ details.strMealThumb }
            alt="image_of_recipe"
          />
          <HeaderDetails foodOrDrink="Comidas" />
          <IngredientDetails />
        </div>
      )}
    </div>
  );
}

export default FoodProcess;
