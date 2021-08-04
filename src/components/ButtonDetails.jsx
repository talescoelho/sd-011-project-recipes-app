import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import AppContext from '../context/AppContext';

export default function ButtonDetails({ foodOrDrink, id }) {
  const { idDetails } = useContext(AppContext);
  const [button, setbutton] = useState(false);
  const details = idDetails[0];
  const doneRecipes = {
    id: foodOrDrink === 'Comidas' ? details.idMeal : details.idDrink,
    type: foodOrDrink === 'Comidas' ? 'comida' : 'bebida',
    area: details.strArea || '',
    category: details.strCategory || '',
    alcoholicOrNot: details.strAlcoholic || '',
    name: foodOrDrink === 'Comidas' ? details.strMeal : details.strDrink,
    image: foodOrDrink === 'Comidas' ? details.strMealThumb : details.strDrinkThumb,
    doneDate: Date.now(),
    tags: details.strTags || '',
  };
  function handleClick() {
    localStorage.setItem('doneRecipes', JSON.stringify([doneRecipes]));
    setbutton(!button);
  }

  if (idDetails.length === 0) return <div>Loading...</div>;

  return (
    <div>
      <Link
        to={
          foodOrDrink === 'Comidas'
            ? `/comidas/${id}/in-progress`
            : `/bebidas/${id}/in-progress`
        }
      >
        <Button
          type="button"
          variant="success"
          data-testid="start-recipe-btn"
          className="fixed-bottom"
          onClick={ handleClick }
        >
          {button ? 'Iniciar Receita' : 'Continuar Receita'}
        </Button>
      </Link>
    </div>

  );
}

ButtonDetails.propTypes = {
  foodOrDrink: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};
