import React from 'react';
import { useHistory } from 'react-router';
import '../styles/Footer.css';
import drinkIcon from '../images/drinkIcon.svg';
import exploreIcon from '../images/exploreIcon.svg';
import meailIcon from '../images/mealIcon.svg';

export default function Footer() {
  const history = useHistory();
  console.log(history);

  const goTo = (path) => {
    history.push(path);
  };
  return (
    <footer data-testid="footer">
      <div className="footer-imgs">
        <img
          onClick={() => goTo('/bebidas')}
          data-testid="drinks-bottom-btn"
          src={drinkIcon}
          alt="drinkIcon"
        />
        <img
          onClick={() => goTo('/explorar')}
          data-testid="explore-bottom-btn"
          src={exploreIcon}
          alt="exploreIcon"
        />
        <img
          onClick={() => goTo('/comidas')}
          data-testid="food-bottom-btn"
          src={meailIcon}
          alt="meailIcon"
        />
      </div>
    </footer>
  );
}
