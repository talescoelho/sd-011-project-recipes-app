import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { getFromStorage, setToStorage } from '../../helpers/utils';

class FinishRecipeButton extends React.Component {
  constructor() {
    super();

    this.handleRecipeDone = this.handleRecipeDone.bind(this);
    this.removeStepFromStorage = this.removeStepFromStorage.bind(this); // Req 40
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
      doneDate: new Date().toLocaleString('pt-BR').split(' ')[0],
      tags: (recipe.strTags && recipe.strTags.toLowerCase().split(',')) || [],
    };

    setToStorage('doneRecipes', [...recipesDone, newDoneRecipe]);
    this.removeStepFromStorage(id); // Req 40
    history.push('/receitas-feitas');
  }

  removeStepFromStorage(id) { // Req 40
    const inProgressRecipes = getFromStorage('inProgressRecipes') || []; // Req 40
    delete inProgressRecipes[id]; // Req 40 Deleta chave vazia dentro da chave 'inProgressRecipes'
    setToStorage('inProgressRecipes', inProgressRecipes);
    if (Object.keys(inProgressRecipes).length === 0) {
      localStorage.removeItem('inProgressRecipes');
    }
  }

  render() {
    const { id, ingredients, inProgress } = this.props;

    return (
      <button
        type="button"
        onClick={ () => this.handleRecipeDone() }
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
