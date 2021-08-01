import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import RecipesContext from '../context/RecipesContext';
import drinkIcon from '../images/drinkIcon.svg';
import exploreIcon from '../images/exploreIcon.svg';
import mealIcon from '../images/mealIcon.svg';
import '../styles/Footer.css';

function Footer() {
  const { setCurrentCategory } = useContext(RecipesContext);

  return (
    <footer data-testid="footer" className="footer">
      <Link
        data-testid="drinks-bottom-btn"
        to="/bebidas"
        onClick={ () => setCurrentCategory('All') }
      >
        <img src={ drinkIcon } alt="drink icon" />
      </Link>
      <Link data-testid="explore-bottom-btn" to="/explorar">
        <img src={ exploreIcon } alt="explore icon" />
      </Link>
      <Link
        data-testid="food-bottom-btn"
        to="/comidas"
        onClick={ () => setCurrentCategory('All') }
      >
        <img src={ mealIcon } alt="meal icon" />
      </Link>
    </footer>
  );
}

export default Footer;
