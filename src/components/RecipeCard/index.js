import React from 'react';
import PropTypes from 'prop-types';

class RecipeCard extends React.Component {
  render() {
    const { index } = this.props;

    return (
      <section data-testid={ `${index}-recipe-card` }>
        <img alt="" data-testid={ `${index}-card-img` } />
        <h1 data-testid={ `${index}-card-name` }>Recipe Name</h1>
      </section>
    );
  }
}

export default RecipeCard;

RecipeCard.propTypes = {
  index: PropTypes.number,
}.isRequired;
