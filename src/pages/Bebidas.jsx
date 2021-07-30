import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Cards from '../components/Cards';
import Footer from '../components/Footer';
import { getDrinksFromApi, getCategoriesFromApi } from '../actions';
import FiltersFromCategories from '../components/FiltersFromCategories';
import Header from '../components/Header';

class Bebidas extends React.Component {
  componentDidMount() {
    const { getDrinks, getCategories } = this.props;
    getDrinks();
    getCategories('drinks');
  }

  render() {
    const { drinksDataBase, categories } = this.props;
    const showSearchButton = true;
    return (
      <div>
        <Header title="Bebidas" showSearchButton={ showSearchButton } typeFood="drinks" />
        <FiltersFromCategories categories={ categories } />
        <Cards itemsToRender={ drinksDataBase } typeFood="drink" />
        <Footer />
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  drinksDataBase: state.drinksReducer.drinksFromApi,
  categories: state.drinksReducer.categories,
});

const mapDispatchToProps = (dispatch) => ({
  getDrinks: () => dispatch(getDrinksFromApi()),
  getCategories: (mealsOrDrinks) => dispatch(getCategoriesFromApi(mealsOrDrinks)),
});

Bebidas.propTypes = {
  getDrinks: PropTypes.func.isRequired,
  getCategories: PropTypes.func.isRequired,
  drinksDataBase: PropTypes.arrayOf(
    PropTypes.object,
  ).isRequired,
  categories: PropTypes.arrayOf(
    PropTypes.object,
  ).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Bebidas);
