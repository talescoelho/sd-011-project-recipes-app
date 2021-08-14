import React from 'react';
import { Card } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router';
import ButtonShare from './ButtonShare';
import blackHeartIcon from '../images/blackHeartIcon.svg';

function CardsRecipesFavorites(props) {
  const { index, recipe, handleDisfavor } = props;
  const { id, name, image } = recipe;
  const history = useHistory();

  const card = {
    display: 'flex',
    flexWrap: 'nowrap',
    padding: '2px',
    margin: '10px',
    border: '1px solid #e6e6e6',
  };
  const cardTitle = {
    display: 'flex',
    justifyContent: 'space-between',
    width: '160px',
  };

  const onClickTitleOrImage = () => (
    recipe.type === 'comida' ? history.push(`/comidas/${id}`)
      : history.push(`/bebidas/${id}`));

  const href = window.location.origin;
  const path = (
    recipe.type === 'comida' ? `${href}/comidas/${id}` : `${href}/bebidas/${id}`);

  return (
    <div style={ card }>
      <Card.Img
        style={ { width: '130px' } }
        data-testid={ `${index}-horizontal-image` }
        src={ image }
        alt={ name }
        role="button"
        tabIndex="-1"
        onClick={ onClickTitleOrImage }
        onKeyPress={ onClickTitleOrImage }
      />
      <Card.Body style={ { width: '160px' } }>
        <Card.Text
          data-testid={ `${index}-horizontal-top-text` }
          onClick={ onClickTitleOrImage }
          onKeyPress={ onClickTitleOrImage }
        >
          { recipe.type === 'bebida'
            ? `${recipe.alcoholicOrNot}` : `${recipe.area} - ${recipe.category}`}
        </Card.Text>
        <div style={ cardTitle }>
          <Card.Title
            data-testid={ `${index}-horizontal-name` }
            role="button"
            tabIndex="0"
            onClick={ onClickTitleOrImage }
            onKeyPress={ onClickTitleOrImage }
          >
            { name }
          </Card.Title>
          <ButtonShare
            path={ path }
            testid={ `${index}-horizontal-share-btn` }
          />
          <button
            type="button"
            onClick={ () => handleDisfavor(id) }
          >
            <img
              src={ blackHeartIcon }
              alt="ícone de desfavoritar"
              data-testid={ `${index}-horizontal-favorite-btn` }
            />
          </button>
        </div>
      </Card.Body>
    </div>
  );
}

CardsRecipesFavorites.propTypes = {
  index: PropTypes.number,
}.isRequired;

export default CardsRecipesFavorites;
