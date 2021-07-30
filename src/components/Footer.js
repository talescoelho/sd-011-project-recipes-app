import React from 'react';
import { useHistory } from 'react-router';
import drinkIcon from '../images/drinkIcon.svg';
import exploreIcon from '../images/exploreIcon.svg';
import mealIcon from '../images/mealIcon.svg';

function Footer() {
  const history = useHistory();
  return (
    <footer data-testid="footer">
      <button
        type="button"
        data-testid="drinks-bottom-btn"
        onClick={ () => history.push('/bebidas') }
        src={ drinkIcon }
      >
        <img
          src={ drinkIcon }
          alt="drink-icon"
        />
      </button>
      <button
        type="button"
        data-testid="explore-bottom-btn"
        onClick={ () => history.push('/explorar') }
        src={ exploreIcon }
      >
        <img
          src={ exploreIcon }
          alt="explore-icon"
        />
      </button>
      <button
        type="button"
        data-testid="food-bottom-btn"
        onClick={ () => history.push('/comidas') }
        src={ mealIcon }
      >
        <img
          src={ mealIcon }
          alt="meal-icon"
        />
      </button>
    </footer>
  );
}

export default Footer;
