import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { fetchAPI } from '../services';

export default function ExploreDynamic({ title, type }) {
  const showSearchButton = false;
  const drinkOrFood = type === 'drink' ? 'bebidas' : 'comidas';
  const history = useHistory();

  async function randomRedirect() {
    const id = await fetchAPI[type].getRandom();
    history.push(`/${drinkOrFood}/${id}`);
  }
  return (
    <div>
      <Header title={ title } showSearchButton={ showSearchButton } />
      <Link to={ `/explorar/${drinkOrFood}/ingredientes` }>
        <button
          type="button"
          data-testid="explore-by-ingredient"
        >
          Por Ingredientes
        </button>
      </Link>
      { (type === 'food') && (
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
      <Footer drink={ type === 'drink' } />
    </div>
  );
}
ExploreDynamic.propTypes = {
  title: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};
