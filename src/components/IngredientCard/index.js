import React, { Component } from 'react';
import PropTypes from 'prop-types';

class IngredientCard extends Component {
  render() {
    const { index, ingredientName, typeRecipe } = this.props;

    const imageSrc = typeRecipe === 'comidas'
      ? `https://www.themealdb.com/images/ingredients/${ingredientName}-Small.png`
      : `https://www.thecocktaildb.com/images/ingredients/${ingredientName}-Small.png`;

    return (
      <section>
        <button
          type="button"
          data-testid={ `${index}-ingredient-card` }
        >
          <img
            src={ imageSrc }
            alt={ ingredientName }
            width="200px"
            data-testid={ `${index}-card-img` }
          />
          <h1 data-testid={ `${index}-card-name` }>{ ingredientName }</h1>
        </button>
      </section>
    );
  }
}

IngredientCard.propTypes = {
  index: PropTypes.number,
  ingredientName: PropTypes.string,
  typeRecipe: PropTypes.string,
}.isRequired;

export default IngredientCard;
