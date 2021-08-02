import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import RecipeAppContext from '../context/RecipeAppContext';
import '../css/footer.css';
import drinkIcon from '../images/drinkIcon.svg';
import exploreIcon from '../images/exploreIcon.svg';
import mealIcon from '../images/mealIcon.svg';

function Footer() {
  const { setFoodList, setDrinksList } = useContext(RecipeAppContext);
  return (
    <footer data-testid="footer" className="footer">
      <p>Menu inferior</p>

      <Link to="/bebidas" onClick={ () => setFoodList('') }>
        <img
          src={ drinkIcon }
          alt="drinks page"
          data-testid="drinks-bottom-btn"
        />
      </Link>

      <Link to="/explorar">
        <img src={ exploreIcon } alt="explore page" data-testid="explore-bottom-btn" />
      </Link>

      <Link to="/comidas" onClick={ () => setDrinksList('') }>
        <img src={ mealIcon } alt="foods page" data-testid="food-bottom-btn" />
      </Link>

    </footer>
  );
}

/*

      <Link to="/explorar" data-testid="explore-bottom-btn">
        <img src={ exploreIcon }/>
      </Link>

*/

export default Footer;
