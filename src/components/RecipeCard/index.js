import React from 'react';
import PropTypes from 'prop-types';

class RecipeCard extends React.Component {
  render() {
    const { index, recipe } = this.props;

    const imageSrc = recipe.strMealThumb || recipe.strDrinkThumb;
    const recipeName = recipe.strMeal || recipe.strDrink;

    return (
      <section data-testid={ `${index}-recipe-card` }>
        <img src={ imageSrc } alt={ recipeName } data-testid={ `${index}-card-img` } />
        <h1 data-testid={ `${index}-card-name` }>{recipeName}</h1>
      </section>
    );
  }
}

export default RecipeCard;

RecipeCard.propTypes = {
  index: PropTypes.number,
  recipe: PropTypes.objectOf(PropTypes.string),
}.isRequired;
