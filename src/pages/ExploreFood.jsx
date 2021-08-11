import React from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import { requestRandomFoodRecipe } from '../services/requestRandomRecipe';

export default function ExploreFood({ history }) {
  const callRandomAPImeal = async () => {
    const callAPI = await requestRandomFoodRecipe();
    const result = callAPI.meals;
    history.push(`/comidas/${result[0].idMeal}`);
  };

  return (
    <>
      <Link to="/explorar/comidas/ingredientes">
        <Button
          type="submit"
          data-testid="explore-by-ingredient"
          variant="light"
          size="lg"
        >
          Por Ingredientes
        </Button>
      </Link>
      <Link to="/explorar/comidas/area">
        <Button
          type="submit"
          data-testid="explore-by-area"
          variant="light"
          size="lg"
        >
          Por Local de Origem
        </Button>
      </Link>
      <Button
        type="submit"
        data-testid="explore-surprise"
        variant="light"
        size="lg"
        onClick={ () => callRandomAPImeal() }
      >
        Me Surpreenda!
      </Button>
    </>
  );
}

ExploreFood.propTypes = {
  history: PropTypes.node.isRequired,
};
