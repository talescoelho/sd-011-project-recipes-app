import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class RecipesList extends Component {
  constructor() {
    super();
    this.state = {
      filters: [],
    };
    this.renderRecipes = this.renderRecipes.bind(this);
    this.fetchFiltersFood = this.fetchFiltersFood.bind(this);
    this.fetchFiltersDrink = this.fetchFiltersDrink.bind(this);
    this.renderFilters = this.renderFilters.bind(this);
    this.fetchFilters = this.fetchFilters.bind(this);
  }

  componentDidMount() {
    this.fetchFilters();
  }

  componentDidUpdate() {
    this.fetchFilters();
  }

  fetchFilters() {
    const { pathName } = this.props;
    if (pathName === '/comidas') {
      this.fetchFiltersFood();
    } else {
      this.fetchFiltersDrink();
    }
  }

  fetchFiltersFood() {
    fetch('https://www.themealdb.com/api/json/v1/1/list.php?c=list')
      .then((response) => response.json())
      .then((response) => this.setState({ filters: response }));
  }

  fetchFiltersDrink() {
    fetch('https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list')
      .then((response) => response.json())
      .then((response) => this.setState({ filters: response }));
  }

  renderFilters() {
    const { pathName } = this.props;
    let teste;
    if (pathName === '/comidas') {
      teste = 'meals';
    } else {
      teste = 'drinks';
    }
    const { filters } = this.state;
    const maxFilters = 5;
    return (
      filters[teste] && filters[teste].map((item, index) => (
        index < maxFilters
      && (
        <button
          type="button"
          key={ index }
          data-testid={ `${item.strCategory}-category-filter` }
        >
          { item.strCategory }
        </button>)
      ))
    );
  }

  renderRecipes() {
    const { foodAPIResponse: { meals },
      drinkAPIResponse: { drinks },
      pathName } = this.props;
    const maxRecipes = 12;
    if (meals.length !== 0 && pathName === '/comidas') {
      return (
        <>
          {this.renderFilters()}
          {meals.map((meal, index) => {
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
            return undefined;
          })}
        </>
      );
    }
    if (drinks.length !== 0 && pathName === '/bebidas') {
      return (
        <>
          {this.renderFilters()}
          {drinks.map((drink, index) => {
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
            return undefined;
          })}
        </>
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
  pathName: PropTypes.string,
}.isRequired;

const mapStateToProps = (state) => ({
  foodAPIResponse: state.recipeReducer.foodRecipes,
  drinkAPIResponse: state.recipeReducer.drinksRecipes,
});

export default connect(mapStateToProps)(RecipesList);
