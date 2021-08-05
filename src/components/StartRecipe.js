import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import '../StartRecipe.css';

class StartRecipe extends Component {
  checkRecipesStatus() {
    const { id } = this.props;
    const doneRecipes = JSON.parse(localStorage.getItem('doneRecipes'));
    const recipesInProgress = JSON.parse(localStorage.getItem('inProgressRecipes'));

    if (doneRecipes && doneRecipes.find((item) => item.id === id)) {
      return '';
    }
    if (recipesInProgress
      && Object.prototype.hasOwnProperty.call(recipesInProgress.meals, id)) {
      return (
        <Link to={ `/comidas/${id}/in-progress` }>
          <button
            className="start-recipe"
            type="button"
            data-testid="start-recipe-btn"
          >
            Continuar Receita
          </button>
        </Link>
      );
    }
    return (
      <Link to={ `/comidas/${id}/in-progress` }>
        <button
          className="start-recipe"
          type="button"
          data-testid="start-recipe-btn"
        >
          Iniciar Receita
        </button>
      </Link>
    );
  }

  render() {
    return (
      this.checkRecipesStatus()
    );
  }
}

StartRecipe.propTypes = {
  id: PropTypes.number.isRequired,
};

export default StartRecipe;
