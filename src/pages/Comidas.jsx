import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Cards from '../components/Cards';
import Footer from '../components/Footer';
import { getCategoriesFromApi, getFoodFromApi } from '../actions';
import FiltersFromCategories from '../components/FiltersFromCategories';
import Header from '../components/Header';

class Comidas extends React.Component {
  componentDidMount() {
    const { getFoods, getCategories } = this.props;
    getFoods();
    getCategories('meals');
  }

  render() {
    const { foodsDataBase, categories } = this.props;
    const showSearchButton = true;
    return (
      <div>
        <Header title="Comidas" showSearchButton={ showSearchButton } typeFood="food" />
        <FiltersFromCategories categories={ categories } />
        <Cards itemsToRender={ foodsDataBase } typeFood="food" />
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  foodsDataBase: state.foodsReducer.foodsFromApi,
  categories: state.foodsReducer.categories,
});

const mapDispatchToProps = (dispatch) => ({
  getFoods: () => dispatch(getFoodFromApi()),
  getCategories: (mealsOrDrinks) => dispatch(getCategoriesFromApi(mealsOrDrinks)),
});

Comidas.propTypes = {
  getFoods: PropTypes.func.isRequired,
  getCategories: PropTypes.func.isRequired,
  foodsDataBase: PropTypes.arrayOf(
    PropTypes.object,
  ).isRequired,
  categories: PropTypes.arrayOf(
    PropTypes.object,
  ).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Comidas);
