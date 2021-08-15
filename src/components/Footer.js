import React from 'react';
import { useHistory } from 'react-router';
import DrinkIcon from '../images/drinkIcon.svg';
import FoodIcon from '../images/mealIcon.svg';
import ExploreIcon from '../images/exploreIcon.svg';

function Footer() {
  const history = useHistory();
  return (
    <div data-testid="footer" className="footer">
      <button
        type="button"
        onClick={ () => history.push('/bebidas') }
      >
        <img
          data-testid="drinks-bottom-btn"
          src={ DrinkIcon }
          alt="Icone de Bebidas"
        />
      </button>
      <button
        type="button"
        onClick={ () => history.push('/explorar') }
      >
        <img
          data-testid="explore-bottom-btn"
          src={ ExploreIcon }
          alt="Icone de Bebidas"
        />
      </button>
      <button
        type="button"
        onClick={ () => history.push('/comidas') }
      >
        <img
          data-testid="food-bottom-btn"
          src={ FoodIcon }
          alt="Icone de Bebidas"
        />
      </button>
    </div>);
}

export default Footer;
