import React, { useContext } from 'react';
import RecipesContext from '../../../context/RecipesContext';

function DetailsDrinkHeader() {
  const { drinkId } = useContext(RecipesContext);
  return (
    <div>
      <img
        src={ drinkId.strDrinkThumb }
        alt={ drinkId.strDrink }
        data-testid="recipe-photo"
      />
      <div>
        <h3 data-testid="recipe-title">{ drinkId.strDrink }</h3>
        <p data-testid="recipe-category">{ drinkId.strCategory }</p>
      </div>
    </div>
  );
}

export default DetailsDrinkHeader;
