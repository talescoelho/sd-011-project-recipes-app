import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import '../Footer.css';
import { saveDoneRecipe } from '../redux/actions/foodActions';

class IngredientesFoodInProgress extends Component {
  constructor() {
    super();
    this.state = {
      ingredientsArrayList: [],
    };
    this.handleOnchange = this.handleOnchange.bind(this);
    this.saveInLocalStorage = this.saveInLocalStorage.bind(this);
  }

  componentDidUpdate(prevProps) {
    const { foodDetails } = this.props;
    if (!Object.is(prevProps.foodDetails, foodDetails)) {
      this.markedBox();
    }
  }

  handleOnchange({ target }) {
    const { checked, value } = target;
    if (checked) {
      this.setState((previousState) => ({
        ingredientsArrayList: [...previousState.ingredientsArrayList, Number(value)],
      }), () => this.saveInLocalStorage());
    } else {
      this.setState((previousState) => ({
        ingredientsArrayList: previousState.ingredientsArrayList
          .filter((box) => box !== Number(value)),
      }), () => this.saveInLocalStorage());
    }
  }

  saveInLocalStorage() {
    const { foodDetails } = this.props;
    const { ingredientsArrayList } = this.state;
    let inProgressRecipes = JSON.parse(localStorage.getItem('inProgressRecipes'));
    if (!inProgressRecipes) {
      inProgressRecipes = {
        cocktails: {},
        meals: {},
      };
    }
    inProgressRecipes.meals[foodDetails.idMeal] = ingredientsArrayList;
    localStorage.setItem('inProgressRecipes', JSON.stringify(inProgressRecipes));
  }

  // ableButton(){

  // }

  markedBox() {
    const { foodDetails } = this.props;
    const inProgressRecipes = JSON.parse(localStorage.getItem('inProgressRecipes'));
    if (inProgressRecipes && Object.keys(inProgressRecipes.meals)
      .find((meal) => Number(meal) === Number(foodDetails.idMeal))) {
      this.setState({
        ingredientsArrayList: inProgressRecipes.meals[foodDetails.idMeal],
      });
    }
  }

  saveInDoneRecipes(){

  }

  render() {
    console.log('qualquer coisa');
    const { foodDetails } = this.props;
    const { ingredientsArrayList } = this.state;
    let ingredients = [];
    let measurements = [];
    const array = Array.of(Object.entries(foodDetails));
    if (array[0].length > 0) {
      ingredients = array[0].filter((item) => item[0].includes('strIngredient'))
        .filter((item) => item[1]).map((item, index) => ({name: item[1], checked: ingredientsArrayList.some((item) => item === index)}));
      measurements = array[0].filter((item) => item[0].includes('strMeasure'))
        .filter((item) => item[1]).map((item) => item[1]);
    }
    return (
      <>
        <ul> {console.log(ingredients)}
          { ingredients
            .map((item, index) => {
              return (item.name
                ? (
                  <label
                    htmlFor={ `${index}-check-ingredients` }
                    className={ingredientsArrayList.some((item) => item === index) ? 'checked-button' : '' }
                    key={ index }
                    data-testid={ `${index}-ingredient-step` }
                  >
                    <input
                      type="checkbox"
                      // checked={ ingredientsArrayList.some((item) => item === index) }
                      checked={ item.checked }
                      onChange={ this.handleOnchange }
                      value={ index }
                      id={ `${index}-check-ingredients` }
                    />
                    {`${item.name} - ${measurements[index]}`}
                  </label>
                )
                : '')
            })}
        </ul>
        <Link to="/receitas-feitas">
        <button
          className="finish-recipe"
          type="button"
          data-testid="finish-recipe-btn"
          disabled={ ingredientsArrayList.length !== ingredients.length }
          onClick={ this.saveInDoneRecipes }
        >
          {' '}
          Finalizar Receita
        </button>
      </Link>
    </>);
  }
}

const mapStateToProps = (state) => ({
  foodDetails: state.foodReducer.foodDetails,
});

const mapDispatchToProps = (dispatch) =>({
  saveDoneRecipes: (id) => dispatch(saveDoneRecipe(id)),
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

export default connect(mapStateToProps, mapDispatchToProps)(IngredientesFoodInProgress);
