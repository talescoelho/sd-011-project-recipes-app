import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { getFromStorage, setToStorage } from '../../helpers/utils';

class FinishRecipeButton extends React.Component {
  constructor() {
    super();

    this.handleRecipeDone = this.handleRecipeDone.bind(this);
  }

  handleRecipeDone() {
    const { id, recipe, type, history } = this.props;

    const recipesDone = getFromStorage('doneRecipes') || [];

    const newDoneRecipe = {
      id,
      type,
      area: recipe.strArea || '',
      category: recipe.strCategory || '',
      alcoholicOrNot: recipe.strAlcoholic || '',
      name: recipe.strMeal || recipe.strDrink,
      image: recipe.strMealThumb || recipe.strDrinkThumb,
      doneDate: Date.now(),
      tags: (recipe.strTags && recipe.strTags.toLowerCase().split(',')) || [],
    };

    setToStorage('doneRecipes', [...recipesDone, newDoneRecipe]);

    history.push('/receitas-feitas');
  }

  render() {
    const { id, ingredients, inProgress } = this.props;

    return (
      <button
        type="button"
        onClick={ this.handleRecipeDone }
        disabled={ !(inProgress[id] && inProgress[id].length === ingredients.length) }
        data-testid="finish-recipe-btn"
      >
        Finalizar
      </button>
    );
  }
}

const mapStateToProps = ({ selectedRecipeReducer: { ingredients, inProgress } }) => ({
  ingredients,
  inProgress,
});

export default connect(mapStateToProps)(withRouter(FinishRecipeButton));

FinishRecipeButton.defaultProps = {
  ingredients: [],
  inProgress: {},
  recipe: {},
};

FinishRecipeButton.propTypes = {
  id: PropTypes.number,
  type: PropTypes.string,
}.isRequired;
