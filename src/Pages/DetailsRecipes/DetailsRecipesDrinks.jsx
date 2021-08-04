import React, { useContext } from 'react';
import MainContext from '../../Context/MainContext';

function DetailsRecipesDrinks() {
  const { idDrinks } = useContext(MainContext);
  return (
    <p>
      oi, eu sou
      {idDrinks}
    </p>
  );
}

export default DetailsRecipesDrinks;
