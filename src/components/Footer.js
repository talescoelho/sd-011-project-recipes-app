import React from 'react';
import { useHistory } from 'react-router-dom';
import '../css/footer.css';
import drinkIcon from '../images/drinkIcon.svg';
import exploreIcon from '../images/exploreIcon.svg';
import mealIcon from '../images/mealIcon.svg';
// import { Redirect } from 'react-router';
// import { Link } from 'react-router-dom';

function Footer() {
  const history = useHistory();
  return (
    <footer data-testid="footer" className="footer">
      <p>Menu inferior</p>

      <button type="button" onClick={ () => history.push('/bebidas') }>
        <img src={ drinkIcon } alt="drinks page" data-testid="drinks-bottom-btn" />
      </button>

      <button type="button" onClick={ () => history.push('/explorar') }>
        <img src={ exploreIcon } alt="explore page" data-testid="explore-bottom-btn" />
      </button>

      <button type="button" onClick={ () => history.push('/comidas') }>
        <img src={ mealIcon } alt="foods page" data-testid="food-bottom-btn" />
      </button>

    </footer>
  );
}

/*

      <Link to="/explorar" data-testid="explore-bottom-btn">
        <img src={ exploreIcon }/>
      </Link>

*/

export default Footer;
