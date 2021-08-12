import React from 'react';
import Proptypes from 'prop-types';
import { Link } from 'react-router-dom';

function FavoriteRecipeCard(props) {
  const { id, nameDataTestId, categoryDataTestId, imageDataTestId,
    recipeDoneDateDataTestId,
    image, name, category, recipeDoneDate, type, area, alcoholicOrNot } = props;

  function renderMealCard() {
    return (
      <>
        <Link to={ `/comidas/${id}` }>
          <img
            src={ image }
            alt="food done"
            data-testid={ imageDataTestId }
            style={ { width: 25 } }
          />
        </Link>
        <Link to={ `/comidas/${id}` }>
          <h2 data-testid={ nameDataTestId }>{ name }</h2>
        </Link>
        <h4 data-testid={ categoryDataTestId }>{ `${area} - ${category}` }</h4>
        <h4 data-testid={ recipeDoneDateDataTestId }>{recipeDoneDate}</h4>
      </>
    );
  }

  function renderDrinkCard() {
    return (
      <>
        <Link to={ `/bebidas/${id}` }>
          <img
            src={ image }
            alt="food done"
            data-testid={ imageDataTestId }
            style={ { width: 25 } }
          />
        </Link>
        <h4 data-testid={ categoryDataTestId }>{ alcoholicOrNot }</h4>
        <Link to={ `/bebidas/${id}` }>
          <h2 data-testid={ nameDataTestId }>{ name }</h2>
        </Link>
        {/* <h4>{ alcoholicOrNot }</h4> */}
        <h4 data-testid={ recipeDoneDateDataTestId }>{recipeDoneDate}</h4>
      </>
    );
  }

  return (
    <div key={ id }>
      { type === 'comida' ? renderMealCard() : renderDrinkCard() }
    </div>
  );
}

FavoriteRecipeCard.propTypes = {
  id: Proptypes.string.isRequired,
  nameDataTestId: Proptypes.string.isRequired,
  categoryDataTestId: Proptypes.string.isRequired,
  imageDataTestId: Proptypes.string.isRequired,
  recipeDoneDateDataTestId: Proptypes.string.isRequired,
  image: Proptypes.string.isRequired,
  name: Proptypes.string.isRequired,
  category: Proptypes.string.isRequired,
  recipeDoneDate: Proptypes.func.isRequired,
  type: Proptypes.string.isRequired,
  area: Proptypes.string.isRequired,
  alcoholicOrNot: Proptypes.string.isRequired,
};

export default FavoriteRecipeCard;
