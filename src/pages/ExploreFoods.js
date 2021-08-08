import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { randomFoodId } from '../redux/actions/foodActions';
import Header from '../components/Header';
import Footer from '../components/Footer';

class ExploreFoods extends Component {
  constructor() {
    super();

    this.redirectRandomFood = this.redirectRandomFood.bind(this);
  }

  async redirectRandomFood() {
    const { randomFoodIdResult, history } = this.props;
    const randomFood = await randomFoodIdResult();
    history.push(`/comidas/${randomFood}`);
  }

  render() {
    return (
      <div>
        <Header />
        <Link to="/explorar/comidas/ingredientes">
          <button type="button" data-testid="explore-by-ingredient">
            Por Ingredientes
          </button>
        </Link>
        <Link to="/explorar/comidas/area">
          <button type="button" data-testid="explore-by-area">
            Por Local de Origem
          </button>
        </Link>
        <button
          type="button"
          data-testid="explore-surprise"
          onClick={ this.redirectRandomFood }
        >
          Me Surpreenda!
        </button>
        <Footer />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  randomFoodIdResult: () => dispatch(randomFoodId()),
});

ExploreFoods.propTypes = {
  randomFoodIdResult: PropTypes.func,
  history: PropTypes.object,
}.isRequired;

export default connect(null, mapDispatchToProps)(ExploreFoods);
