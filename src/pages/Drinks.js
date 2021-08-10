import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchDrinkCategory, fetchDrinkList } from '../redux/actions/drinkActions';
import { DrinkCards, DrinkCategories, Header, Footer } from '../components';

class Drinks extends Component {
  componentDidMount() {
    const { actionFetchDrinkList, actionFetchCategories } = this.props;
    actionFetchDrinkList('');
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
});

const mapDispatchToProps = (dispatch) => ({
  actionFetchDrinkList: (name) => dispatch(fetchDrinkList(name)),
  actionFetchCategories: (category) => dispatch(fetchDrinkCategory(category)),
});

Drinks.propTypes = {
  actionFetchDrinkList: PropTypes.func,
  actionFetchCategories: PropTypes.func,
}.isRequired;

export default connect(mapStateToProps, mapDispatchToProps)(Drinks);
