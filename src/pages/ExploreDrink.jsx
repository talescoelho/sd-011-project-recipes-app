import React from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import { requestRandomDrinkRecipe } from '../services/requestRandomRecipe';

export default function ExploreDrink({ history }) {
  const callRandomAPIdrink = async () => {
    const callAPI = await requestRandomDrinkRecipe();
    const result = callAPI.drinks;
    history.push(`/bebidas/${result[0].idDrink}`);
  };
  return (
    <>
      <Link to="/explorar/bebidas/ingredientes">
        <Button
          type="submit"
          data-testid="explore-by-ingredient"
          variant="light"
          size="lg"
        >
          Por Ingredientes
        </Button>
      </Link>
      <Button
        type="submit"
        data-testid="explore-surprise"
        variant="light"
        size="lg"
        onClick={ () => callRandomAPIdrink() }
      >
        Me Surpreenda!
      </Button>
    </>
  );
}

ExploreDrink.propTypes = {
  history: PropTypes.node.isRequired,
};
