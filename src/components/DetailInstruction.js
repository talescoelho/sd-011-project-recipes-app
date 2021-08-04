import React, { useContext } from 'react';
import { useLocation } from 'react-router';
import MyContext from '../context/MyContext';

function DetailInstruction() {
  const { drinkDetails } = useContext(MyContext);
  const { foodDetails } = useContext(MyContext);

  const { pathname } = useLocation();

  const numberOfVerification = -1;
  const getDrinksDetails = pathname.indexOf('bebidas') > numberOfVerification;

  return getDrinksDetails ? (
    <section>
      <h1>Instructions</h1>
      <div>
        <p data-testid="instructions">{drinkDetails.strInstructions}</p>
      </div>
    </section>
  ) : (
    <section>
      <h1>Instructions</h1>
      <div>
        <p data-testid="instructions">{foodDetails.strInstructions}</p>
      </div>
    </section>
  );
}

export default DetailInstruction;
