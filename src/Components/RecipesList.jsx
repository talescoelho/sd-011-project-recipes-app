import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class RecipesList extends Component {
  constructor() {
    super();

    this.renderRecipes = this.renderRecipes.bind(this);
  }

  renderRecipes() {
    const { foodAPIResponse: { meals }, drinkAPIResponse: { drinks } } = this.props;
    const maxRecipes = 12;
    if (meals.length !== 0) {
      return (
        meals.map((meal, index) => {
          if (index < maxRecipes) {
            return (
              <div
                key={ meal.idMeal }
                data-testid={ `${index}-recipe-card` }
              >
                <img
                  data-testid={ `${index}-card-img` }
                  src={ meal.strMealThumb }
                  alt="Thumb Meal"
                />
                <h2 data-testid={ `${index}-card-name` }>{ meal.strMeal }</h2>
              </div>);
          }
          return (<p key="undefined">Pesquise uma Receita</p>);
        })
      );
    }
    if (drinks.length !== 0) {
      return (
        drinks.map((drink, index) => {
          if (index < maxRecipes) {
            return (
              <div
                key={ drink.idDrink }
                data-testid={ `${index}-recipe-card` }
              >
                <img
                  data-testid={ `${index}-card-img` }
                  src={ drink.strDrinkThumb }
                  alt="Thumb Drink"
                />
                <h2 data-testid={ `${index}-card-name` }>{ drink.strDrink }</h2>
              </div>);
          }
          return (<p key="undefined">Pesquise uma Receita</p>);
        })
      );
    }
  }

  render() {
    return (
      <>
        { this.renderRecipes() }
      </>
    );
  }
}

RecipesList.propTypes = {
  drinkAPIResponse: PropTypes.shape({
    drinks: PropTypes.arrayOf(),
  }),
  foodAPIResponse: PropTypes.shape({
    meals: PropTypes.arrayOf(),
  }),
}.isRequired;

const mapStateToProps = (state) => ({
  foodAPIResponse: state.recipeReducer.foodRecipes,
  drinkAPIResponse: state.recipeReducer.drinksRecipes,
});

export default connect(mapStateToProps)(RecipesList);
