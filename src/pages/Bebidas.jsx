import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Cards from '../components/Cards';
import Footer from '../components/Footer';
import { getDrinksFromApi, getCategoriesFromApi } from '../actions';
import FiltersFromCategories from '../components/FiltersFromCategories';
import Header from '../components/Header';

class Bebidas extends React.Component {
  constructor() {
    super();
    this.state = {
      itemsToRender: [],
    };
    this.prepareItemsOnLoad = this.prepareItemsOnLoad.bind(this);
    this.updateFoods = this.updateFoods.bind(this);
  }

  componentDidMount() {
    this.prepareItemsOnLoad();
  }

  updateFoods(all) {
    if (all) {
      const { drinksDataBase } = this.props;
      this.setState({
        itemsToRender: drinksDataBase,
      });
    } else {
      const { filteredDrinksPerCategory } = this.props;
      this.setState({
        itemsToRender: filteredDrinksPerCategory,
      });
    }
  }

  async prepareItemsOnLoad() {
    const { getDrinks, getCategories } = this.props;
    await getDrinks();
    const { drinksDataBase } = this.props;
    getCategories('drinks');
    this.setState({
      itemsToRender: drinksDataBase,
    });
  }

  render() {
    const { categories } = this.props;
    const { itemsToRender } = this.state;
    const showSearchButton = true;
    return (
      <div>
        <Header title="Bebidas" showSearchButton={ showSearchButton } typeFood="drinks" />
        <FiltersFromCategories
          categories={ categories }
          updateItemsToRender={ this.updateFoods }
          typeFood="drinks"
        />
        <Cards itemsToRender={ itemsToRender } typeFood="drink" />
        <Footer />
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  drinksDataBase: state.drinksReducer.drinksFromApi,
  categories: state.drinksReducer.categories,
  filteredDrinksPerCategory: state.drinksReducer.filteredPerCategory,
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
  filteredDrinksPerCategory: PropTypes.arrayOf(
    PropTypes.object,
  ).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Bebidas);
