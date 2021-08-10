import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchDrinkCategory, fetchDrinkList,
  fetchDrinkIngredientList, renderDrinkIngredient } from '../redux/actions/drinkActions';
import { DrinkCards, DrinkCategories, Header, Footer } from '../components';

class Drinks extends Component {
  componentDidMount() {
    const { actionFetchDrinkList, actionFetchCategories,
      actionFetchIngredientDrinkList, ingredientDrinkQuery,
      actionDrinkIngredient } = this.props;
    if (ingredientDrinkQuery === '') {
      actionFetchDrinkList('');
    } else {
      actionFetchIngredientDrinkList(ingredientDrinkQuery);
      actionDrinkIngredient('');
    }
    actionFetchCategories('list');
  }

  render() {
    return (
      <div>
        <Header title="Bebidas" search />
        <DrinkCategories />
        <DrinkCards test="-recipe-card" />
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  drinkCardsList: state.drinkReducer.drinkCardsList,
  ingredientDrinkQuery: state.drinkReducer.ingredientDrinkQuery,
});

const mapDispatchToProps = (dispatch) => ({
  actionFetchDrinkList: (name) => dispatch(fetchDrinkList(name)),
  actionFetchCategories: (category) => dispatch(fetchDrinkCategory(category)),
  actionFetchIngredientDrinkList: (ingredient) => {
    dispatch(fetchDrinkIngredientList(ingredient));
  },
  actionDrinkIngredient: (ingredient) => dispatch(renderDrinkIngredient(ingredient)),
});

Drinks.propTypes = {
  actionFetchDrinkList: PropTypes.func,
  actionFetchCategories: PropTypes.func,
}.isRequired;

export default connect(mapStateToProps, mapDispatchToProps)(Drinks);
