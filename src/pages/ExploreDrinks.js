import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { randomDrinkId } from '../redux/actions/drinkActions';
import Header from '../components/Header';
import Footer from '../components/Footer';

class ExploreDrinks extends Component {
  constructor() {
    super();

    this.redirectRandomDrink = this.redirectRandomDrink.bind(this);
  }

  async redirectRandomDrink() {
    const { randomDrinkIdResult, history } = this.props;
    const randomDrink = await randomDrinkIdResult();
    history.push(`/bebidas/${randomDrink}`);
  }

  render() {
    return (
      <div>
        <Header title="Explorar Bebidas" search={ false } />
        <Link to="/explorar/bebidas/ingredientes">
          <button type="button" data-testid="explore-by-ingredient">
            Por Ingredientes
          </button>
        </Link>
        <button
          type="button"
          data-testid="explore-surprise"
          onClick={ this.redirectRandomDrink }
        >
          Me Surpreenda!
        </button>
        <Footer />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  randomDrinkIdResult: () => dispatch(randomDrinkId()),
});

ExploreDrinks.propTypes = {
  randomDrinkIdResult: PropTypes.func,
  history: PropTypes.object,
}.isRequired;

export default connect(null, mapDispatchToProps)(ExploreDrinks);
