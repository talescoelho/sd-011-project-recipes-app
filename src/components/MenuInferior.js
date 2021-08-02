import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import drinkIcon from '../images/drinkIcon.svg';
import exploreIcon from '../images/exploreIcon.svg';
import mealIcon from '../images/mealIcon.svg';

import recipesContext from '../provider/recipesContext';

function MenuInferior() {
  const { setType } = useContext(recipesContext);
  return (
    <div
      className="fixed-bottom"
      data-testid="footer"
    >
      <Link to="/bebidas" onClick={ () => setType('cocktail') }>
        <button type="button">
          <img
            data-testid="drinks-bottom-btn"
            src={ drinkIcon }
            alt="bebidas"
          />
        </button>
      </Link>
      <Link to="/explorar">
        <button type="button">
          <img
            data-testid="explore-bottom-btn"
            src={ exploreIcon }
            alt="bebidas"
          />
        </button>
      </Link>
      <Link to="/comidas" onClick={ () => setType('meal') }>
        <button type="button">
          <img
            data-testid="food-bottom-btn"
            src={ mealIcon }
            alt="bebidas"
          />
        </button>
      </Link>
    </div>
  );
}

export default MenuInferior;
