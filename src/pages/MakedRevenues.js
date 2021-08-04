import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import MakedRevenuesButton from '../components/MakedRevenuesButton';
import DoneRecipesCard from '../components/DoneRecipeCard';

class MakedRevenues extends Component {
  constructor() {
    super();

    this.state = {
      recipes: [],
    };

    this.getDoneRecipes = this.getDoneRecipes.bind(this);
    this.statusButton = this.statusButton.bind(this);
  }

  componentDidMount() {
    this.getDoneRecipes();
  }

  getDoneRecipes() {
    const recipes = JSON.parse(localStorage.getItem('doneRecipes'));
    if (recipes) {
      this.setState({ recipes });
      return recipes;
    }
  }

  statusButton({ target }) {
    if (target.innerText === 'Food') {
      const foods = this.getDoneRecipes() ? (
        this.getDoneRecipes().filter((recipe) => recipe.type === 'comida')) : null;
      this.setState({ recipes: foods });
    } else if (target.innerText === 'Drink') {
      const drinks = this.getDoneRecipes() ? (
        this.getDoneRecipes().filter((recipe) => recipe.type === 'bebida')) : null;
      this.setState({ recipes: drinks });
    } else {
      this.getDoneRecipes();
    }
  }

  render() {
    const { recipes } = this.state;
    return (
      <div className="page">
        <div className="recipes-done-container">
          <Header title="Receitas Feitas" searchIcon />
          <MakedRevenuesButton statusButton={ this.statusButton } />
          {recipes ? recipes.map((recipe, index) => (
            <DoneRecipesCard
              key={ index }
              recipe={ recipe }
              index={ index }
            />)) : null }
        </div>
      </div>
    );
  }
}

MakedRevenuesButton.propTypes = {
  location: PropTypes.objectOf(Object),
}.isRequired;

export default MakedRevenues;
