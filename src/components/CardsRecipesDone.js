import React from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Card } from 'react-bootstrap';
import ButtonShare from './ButtonShare';

export default function CardsRecipesDone(props) {
  const { key, recipe } = props;
  const { type, name, image, doneDate, category, id } = recipe;
  const { tags, alcoholicOrNot, area } = recipe;
  const history = useHistory();
  const firstTags = tags.filter((_tag, index) => index < 2);

  const href = window.location.origin;
  const getPath = () => (
    type === 'meal' ? `${href}/comidas/${id}` : `${href}/bebidas/${id}`);

  const onClickTitleOrImage = () => (
    type === 'meal' ? history.push(`/comidas/${id}`) : history.push(`/bebidas/${id}`));

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
  const cardTags = {
    background: '#e6e6e6',
    borderRadius: '5px',
    fontSize: '14px',
    margin: '2px',
    padding: '3px',
  };

  return (
    <div style={ card }>
      <Card.Img
        style={ { width: '130px' } }
        data-testid={ `${key}-horizontal-image` }
        src={ image }
        alt="Foto da receita"
        role="button"
        tabIndex="-1"
        onClick={ onClickTitleOrImage }
        onKeyPress={ onClickTitleOrImage }
      />
      <Card.Body style={ { width: '160px' } }>
        <div style={ cardTitle }>
          <Card.Title
            data-testid={ `${key}-horizontal-name` }
            role="button"
            tabIndex="0"
            onClick={ onClickTitleOrImage }
            onKeyPress={ onClickTitleOrImage }
          >
            { name }
          </Card.Title>
          <div data-testid={ `${key}-horizontal-horizontal-share-btn` }>
            <ButtonShare path={ getPath() } />
          </div>
        </div>
        <Card.Text>
          { area && <span>{ `${area} | ` }</span>}
          <span
            data-testid={ `${key}-horizontal-horizontal-top-text` }
          >
            { category }
          </span>
          { alcoholicOrNot && <p>{ alcoholicOrNot }</p>}
          <p style={ { fontSize: '13px' } }>
            Feita em:
            { ' ' }
            <span data-testid={ `${key}-horizontal-done-date` }>{ doneDate }</span>
          </p>
        </Card.Text>
        <div style={ { display: 'flex', flexWrap: 'wrap', width: '160px' } }>
          { tags && firstTags.map((tag) => (
            <span
              style={ cardTags }
              className="tags"
              key={ tag }
              data-testid={ `${key}-${tag}-horizontal-tag` }
            >
              { tag }
            </span>
          ))}
        </div>
      </Card.Body>
    </div>
  );
}

CardsRecipesDone.propTypes = {
  key: PropTypes.number,
}.isRequired;
