import React from 'react';
import { useHistory } from 'react-router';
import { Button } from 'react-bootstrap';
import propTypes from 'prop-types';
import FoodSurprise from '../services/FoodSurprise';

export default function ExploreButtons({ type }) {
  const history = useHistory();

  const food = {
    meals: 'comidas',
    drinks: 'bebidas',
  };

  const handleClickMeal = async () => {
    const foodAleatory = await FoodSurprise(type);
    const { idMeal, idDrink } = foodAleatory[0];
    history.push(`/${food[type]}/${idMeal || idDrink}`);
  };

  return (
    <div className="d-flex flex-column mt-5 mx-2">
      <Button
        className="m-1"
        data-testid="explore-by-ingredient"
        onClick={ () => {
          history.push(`/explorar/${food[type]}/ingredientes`);
        } }
      >
        Por Ingredientes
      </Button>
      {type === 'meals'
      && (
        <Button
          className="m-1"
          data-testid="explore-by-area"
          onClick={ () => {
            history.push(`/explorar/${food[type]}/area`);
          } }
        >
          Por Local de Origem
        </Button>)}
      <Button
        className="m-1"
        data-testid="explore-surprise"
        onClick={ handleClickMeal }
      >
        Me Surpreenda!
      </Button>
    </div>
  );
}

ExploreButtons.propTypes = {
  type: propTypes.string.isRequired,
};
