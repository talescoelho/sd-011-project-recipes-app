import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import '../Footer.css';

class IngredientesFoodInProgress extends Component {
  constructor() {
    super();
    this.state = {
      ingredientsArrayList: [],
    }
  this.handleOnchange = this.handleOnchange.bind(this);
  this.saveInLocalStorage = this.saveInLocalStorage.bind(this);
}

componentDidUpdate() {
  this.saveInLocalStorage();
}

  handleOnchange({ target }) {
    const { checked, value } = target;
    if(checked) {
      this.setState((previousState)=> ({
        ingredientsArrayList: [...previousState.ingredientsArrayList, Number(value)],
      }));
    } else {
      this.setState((previousState)=> ({
        ingredientsArrayList: previousState.ingredientsArrayList
        .filter((box) => box !== Number(value)),
      }));
    }
  };

  saveInLocalStorage() {
    const { foodDetails } = this.props;
    const { ingredientsArrayList } = this.state;
    let inProgressRecipes = JSON.parse(localStorage.getItem('inProgressRecipes'));
   if(!inProgressRecipes) {
    inProgressRecipes = {
      cocktails: {}, 
      meals: {},
   }
    }
  inProgressRecipes.meals[foodDetails.idMeal] = ingredientsArrayList;
  localStorage.setItem('inProgressRecipes', JSON.stringify(inProgressRecipes));
  };

  render() {
    const { foodDetails } = this.props;
    let ingredients = [];
    let measurements = [];
    const array = Array.of(Object.entries(foodDetails));
    if (array[0].length > 0) {
      ingredients = array[0].filter((item) => item[0].includes('strIngredient'))
        .filter((item) => item[1]).map((item) => item[1]);
      measurements = array[0].filter((item) => item[0].includes('strMeasure'))
        .filter((item) => item[1]).map((item) => item[1]);
    }
    return (
      <ul>
        { ingredients
            .map((item, index) => (item
              ? (
                <label htmlFor={ `${index}-check-ingredients` }>
                  <input
                    onChange={ this.handleOnchange }
                    value={ index } 
                    id={ `${index}-check-ingredients` }
                    type="checkbox"
                    data-testid={ `${index}-ingredient-step` }
                    key={ index }
                    />
             {`${item} - ${measurements[index]}`}
                </label>
                )
                : ''))}
      </ul>
    )
  }
}

const mapStateToProps = (state) => ({
  foodDetails: state.foodReducer.foodDetails,
});

IngredientesFoodInProgress.propTypes = {
  foodDetails: PropTypes.shape({
    strMealThumb: PropTypes.string,
    strMeal: PropTypes.string,
    strCategory: PropTypes.string,
    strInstructions: PropTypes.string,
    strYoutube: PropTypes.string,
    idMeal: PropTypes.string,
  }).isRequired,
};

export default connect(mapStateToProps)(IngredientesFoodInProgress);
