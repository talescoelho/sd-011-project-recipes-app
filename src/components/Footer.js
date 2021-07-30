import React from 'react';
import { useHistory } from 'react-router';
import { useDispatch } from 'react-redux';
import drinkIcon from '../images/drinkIcon.svg';
import exploreIcon from '../images/exploreIcon.svg';
import mealIcon from '../images/mealIcon.svg';
import { turnGiveIdFalse } from '../actions';

function Footer() {
  const history = useHistory();
  const dispatch = useDispatch();
  return (
    <footer data-testid="footer">
      <button
        type="button"
        data-testid="drinks-bottom-btn"
        onClick={ () => {
          history.push('/bebidas');
          dispatch(turnGiveIdFalse());
        } }
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
