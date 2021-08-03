import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';
import ShareAndFavorite from './ShareAndFavorite';

function DoneRecipeCards({
  src, name, index, text, date, tags, area, comidaOuBebida, id }) {
  return (
    <div>
      {comidaOuBebida === 'comida' ? (
        <div>
          <div>
            <Link to={ `/comidas/${id}` }>
              <img
                src={ src }
                alt={ name }
                data-testid={ `${index}-horizontal-image` }
              />
            </Link>
          </div>
          <div>
            <p data-testid={ `${index}-horizontal-top-text` }>
              {area}
              {' '}
              -
              {' '}
              {text}
            </p>
            <Link to={ `/comidas/${id}` }>
              <h2 data-testid={ `${index}-horizontal-name` }>{name}</h2>
            </Link>
            <ShareAndFavorite
              share
              testShare={ `${index}-horizontal-share-btn` }
              comidasOuBebidas="comidas"
              id={ id }
            />
            <p data-testid={ `${index}-horizontal-done-date` }>
              Feita em:
              {' '}
              {date}
            </p>
            {tags
              .map((e, i) => i < 2 && (
                <span
                  key={ i }
                  data-testid={ `${index}-${e}-horizontal-tag` }
                >
                  {e}
                </span>))}
          </div>
        </div>)
        : (
          <div>
            <div>
              <Link to={ `/bebidas/${id}` }>
                <img
                  src={ src }
                  alt={ name }
                  data-testid={ `${index}-horizontal-image` }
                />
              </Link>
            </div>
            <div>
              <p data-testid={ `${index}-horizontal-top-text` }>
                {text}
              </p>
              <Link to={ `/bebidas/${id}` }>
                <h2 data-testid={ `${index}-horizontal-name` }>{name}</h2>
              </Link>
              <ShareAndFavorite
                share
                testShare={ `${index}-horizontal-share-btn` }
                comidasOuBebidas="bebidas"
                id={ id }
              />
              <p data-testid={ `${index}-horizontal-done-date` }>
                Feita em:
                {' '}
                {date}
              </p>
              {tags
                .map((e, i) => i < 2 && (
                  <span
                    key={ i }
                    data-testid={ `${index}-${e}-horizontal-tag` }
                  >
                    {e}
                  </span>))}
            </div>
          </div>
        )}

    </div>
  );
}

DoneRecipeCards.propTypes = {
  area: PropTypes.string.isRequired,
  comidaOuBebida: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  tags: PropTypes.oneOfType([PropTypes.array]).isRequired,
  text: PropTypes.string.isRequired,
};

export default DoneRecipeCards;
