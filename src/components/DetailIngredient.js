import React, { useContext } from 'react';
import { useLocation } from 'react-router';
import MyContext from '../context/MyContext';

function DetailIngredient() {
  const { foodIngredients } = useContext(MyContext);
  const { drinkIngredients } = useContext(MyContext);
  const { pathname } = useLocation();

  const numberOfVerification = -1;
  const getDrinksDetails = pathname.indexOf('bebidas') > numberOfVerification;

  return getDrinksDetails ? (
    <section>
      <h1>Ingredients</h1>
      <div>
        <ul>
          {drinkIngredients.map((item, index) => (
            <li
              key={ index }
              data-testid={ `${index}-ingredient-name-and-measure` }
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  ) : (
    <section>
      <h1>Ingredients</h1>
      <div>
        <ul>
          {foodIngredients.map((item, index) => (
            <li
              key={ `${index}F` }
              data-testid={ `${index}-ingredient-name-and-measure` }
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default DetailIngredient;
