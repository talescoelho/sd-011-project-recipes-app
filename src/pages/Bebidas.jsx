import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Cards from '../components/Cards';
import { getDrinkFromApi } from '../actions';
import FiltersFromCategories from '../components/FiltersFromCategories';

class Bebidas extends React.Component {
  componentDidMount() {
    const { getDrinks } = this.props;
    getDrinks();
  }

  render() {
    const { drinksDataBase } = this.props;
    return (
      <div>
        <FiltersFromCategories />
        <Cards itemsToRender={ drinksDataBase } typeFood="drink" />
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
