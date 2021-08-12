import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import RecipesContext from '../context/RecipesContext';
import drinkIcon from '../images/drinkIcon.svg';
import exploreIcon from '../images/exploreIcon.svg';
import mealIcon from '../images/mealIcon.svg';
import '../styles/Footer.css';

function Footer() {
  const { setCurrentCategory, setIngredient } = useContext(RecipesContext);

  return (
    <footer data-testid="footer" className="footer">
      <Link
        to="/bebidas"
        onClick={ () => { setCurrentCategory('All'); setIngredient(null); } }
      >
        <img data-testid="drinks-bottom-btn" src={ drinkIcon } alt="drink icon" />
      </Link>
      <Link to="/explorar">
        <img data-testid="explore-bottom-btn" src={ exploreIcon } alt="explore icon" />
      </Link>
      <Link
        to="/comidas"
        onClick={ () => { setCurrentCategory('All'); setIngredient(null); } }
      >
        <img data-testid="food-bottom-btn" src={ mealIcon } alt="meal icon" />
      </Link>
    </footer>
  );
}

export default Footer;
