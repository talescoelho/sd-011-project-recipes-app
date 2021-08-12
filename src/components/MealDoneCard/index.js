import React from 'react';
import PropTypes from 'prop-types';
import ShareIcon from '../../images/shareIcon.svg';

class MealDoneCard extends React.Component {
  render() {
    const { recipe, count } = this.props;

    return (
      <section>
        <section>
          <img
            src={ recipe.image }
            alt={ recipe.name }
            data-testid={ `${count}-horizontal-image` }
          />
        </section>
        <section>
          <p data-testid={ `${count}-horizontal-top-text` }>
            { `${recipe.area} - ${recipe.category}` }
          </p>
          <h1 data-testid={ `${count}-horizontal-name` }>{ recipe.name }</h1>
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
          <seciont>
            {
              recipe.tags.map((tag, index) => (
                <span key={ index } data-testid={ `${count}-${tag}-horizontal-tag` }>
                  { tag }
                </span>
              ))
            }
          </seciont>
        </section>
      </section>
    );
  }
}

export default MealDoneCard;

MealDoneCard.propTypes = {
  recipe: PropTypes.shape({
    image: PropTypes.string,
    name: PropTypes.string,
    category: PropTypes.string,
    doneDate: PropTypes.number,
    tags: PropTypes.arrayOf(PropTypes.string),
  }),
}.isRequired;
