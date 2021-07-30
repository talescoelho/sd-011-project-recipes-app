import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Cards from '../components/Cards';
import Footer from '../components/Footer';
import { getDrinkFromApi } from '../actions';
import FiltersFromCategories from '../components/FiltersFromCategories';
import Header from '../components/Header';

class Bebidas extends React.Component {
  componentDidMount() {
    const { getDrinks } = this.props;
    getDrinks();
  }

  render() {
    const { drinksDataBase } = this.props;
    const showSearchButton = true;
    return (
      <div>
        <Header title="Bebidas" showSearchButton={ showSearchButton } />
        <FiltersFromCategories />
        <Cards itemsToRender={ drinksDataBase } typeFood="drink" />
        <Footer />
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  drinksDataBase: state.drinksReducer.drinksFromApi,
});

const mapDispatchToProps = (dispatch) => ({
  getDrinks: () => dispatch(getDrinkFromApi()),
});

Bebidas.propTypes = {
  getDrinks: PropTypes.func.isRequired,
  drinksDataBase: PropTypes.arrayOf(
    PropTypes.object,
  ).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Bebidas);
