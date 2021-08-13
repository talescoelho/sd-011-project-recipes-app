import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { getXFirstElementsFromArray } from '../../helpers/utils';
import ShareIcon from '../../images/shareIcon.svg';

class RecipeDoneCard extends React.Component {
  render() {
    const { recipe, count } = this.props;

    return (
      <section>
        <section>
          <Link to={ `/${recipe.type}s/${recipe.id}` }>
            <img
              src={ recipe.image }
              alt={ recipe.name }
              width="200px"
              data-testid={ `${count}-horizontal-image` }
            />
          </Link>
        </section>
        <section>
          <p data-testid={ `${count}-horizontal-top-text` }>
            {
              recipe.type === 'comida'
                ? `${recipe.area} - ${recipe.category}`
                : recipe.alcoholicOrNot
            }
          </p>
          <Link to={ `/${recipe.type}s/${recipe.id}` }>
            <h1 data-testid={ `${count}-horizontal-name` }>
              { recipe.name }
            </h1>
          </Link>
          <p data-testid={ `${count}-horizontal-done-date` }>
            { `Feita em: ${recipe.doneDate}` }
          </p>
          <button type="button">
            <img
              src={ ShareIcon }
              alt="Compartilhar"
              data-testid={ `${count}-horizontal-share-btn` }
            />
          </button>
          <section>
            {
              getXFirstElementsFromArray(recipe.tags, 2).map((tag, index) => (
                <span key={ index } data-testid={ `${count}-${tag}-horizontal-tag` }>
                  { tag }
                </span>
              ))
            }
          </section>
        </section>
      </section>
    );
  }
}

export default RecipeDoneCard;

RecipeDoneCard.propTypes = {
  recipe: PropTypes.shape({
    id: PropTypes.number,
    image: PropTypes.string,
    name: PropTypes.string,
    category: PropTypes.string,
    doneDate: PropTypes.number,
    tags: PropTypes.arrayOf(PropTypes.string),
    type: PropTypes.string,
    alcoholicOrNot: PropTypes.string,
  }),
}.isRequired;
