import PropTypes from 'prop-types';
import React from 'react';
import { useHistory } from 'react-router';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { fetchAPI } from '../services';
import { Button } from '../styles';

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
      <Header title={ title } type={ type } showSearchButton={ showSearchButton } />
      <div className="d-flex flex-column p-2">
        <Button
          type="button"
          drink={ type === 'drink' }
          data-testid="explore-by-ingredient"
          className="btn m-3 border btn-lg border-dark"
          onClick={ () => history.push(`/explorar/${drinkOrFood}/ingredientes`) }
        >
          Por Ingredientes
        </Button>
        { (type === 'food') && (
          <Button
            type="button"
            data-testid="explore-by-area"
            className="btn m-3 border btn-lg border-dark"
            onClick={ () => history.push(`/explorar/${drinkOrFood}/area`) }
          >
            Por Local de Origem
          </Button>
        ) }
        <Button
          onClick={ () => randomRedirect() }
          drink={ type === 'drink' }
          type="button"
          data-testid="explore-surprise"
          className="btn m-3 border btn-lg border-dark"
        >
          Me Surpreenda!
        </Button>
      </div>

      <Footer drink={ type === 'drink' } />
    </div>
  );
}
ExploreDynamic.propTypes = {
  title: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};
