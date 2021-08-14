import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { Foods, Cocktails } from '../services';

export default function ExploreDynamic({ type }) {
  const showSearchButton = false;
  const drinkOrFood = type.includes('ebida') ? 'bebidas' : 'comidas';
  const history = useHistory();

  async function randomRedirect() {
    const id = type
      .includes('omida') ? await Foods.getRandom() : await Cocktails.getRandom();
    history.push(`/${drinkOrFood}/${id}`);
  }
  return (
    <div>
      <Header pageName={ type } showSearchButton={ showSearchButton } />
      <Link to={ `/explorar/${drinkOrFood}/ingredientes` }>
        <button
          type="button"
          data-testid="explore-by-ingredient"
        >
          Por Ingredientes
        </button>
      </Link>
      { (type.includes('omida')) && (
        <Link to={ `/explorar/${drinkOrFood}/area` }>
          <button
            type="button"
            data-testid="explore-by-area"
          >
            Por Local de Origem
          </button>
        </Link>
      ) }
      <button
        onClick={ () => randomRedirect() }
        type="button"
        data-testid="explore-surprise"
      >
        Me Surpreenda!
      </button>
      <Footer color={ type.includes('ebida') ? '#a73d7e' : null } />
    </div>
  );
}
ExploreDynamic.propTypes = {
  type: PropTypes.string.isRequired,
};
