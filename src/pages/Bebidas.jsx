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
      renderOneOrNot: true,
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
        renderOneOrNot: true,
      });
    } else {
      const { filteredDrinksPerCategory } = this.props;
      this.setState({
        itemsToRender: filteredDrinksPerCategory,
        renderOneOrNot: false,
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
    const { itemsToRender, renderOneOrNot } = this.state;
    const showSearchButton = true;
    return (
      <div>
        <Header
          title="Bebidas"
          showSearchButton={ showSearchButton }
          updateItemsToRender={ this.updateFoods }
          typeFood="drinks"
        />
        <FiltersFromCategories
          categories={ categories }
          updateItemsToRender={ this.updateFoods }
          typeFood="drinks"
        />
        <Cards
          itemsToRender={ itemsToRender }
          renderOneOrNot={ renderOneOrNot }
          typeFood="drink"
        />
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
