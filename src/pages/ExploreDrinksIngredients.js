import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { drinkIngredients } from '../redux/actions/drinkActions';
import Header from '../components/Header';
import Footer from '../components/Footer';

class ExploreDrinksIngredients extends Component {
  componentDidMount() {
    const { actionfetchDrinkIngredient } = this.props;
    actionfetchDrinkIngredient();
  }

  render() {
    const { fetchDrinkIngredients } = this.props;
    return (
      <div>
        <Header />
        <ul>
          { fetchDrinkIngredients.map((item, index) => (
            <li
              key={ item.strIngredient1 }
              data-testid={ `${index}-ingredient-card` }
            >
              <img
                src={ `https://www.thecocktaildb.com/images/ingredients/${item.strIngredient1}-Small.png` }
                alt="Drink Ingredients"
                data-testid={ `${index}-card-img` }
                height="200px"
                width="200px"
              />
              <p data-testid={ `${index}-card-name` }>{ item.strIngredient1 }</p>
            </li>
          )) }
        </ul>
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  fetchDrinkIngredients: state.drinkReducer.drinkIngredients,
});

const mapDispatchToProps = (dispatch) => ({
  actionfetchDrinkIngredient: () => dispatch(drinkIngredients()),
});

ExploreDrinksIngredients.propTypes = {
  fetchDrinkIngredients: PropTypes.arrayOf(PropTypes.string),
  actionfetchDrinkIngredient: PropTypes.func,
}.isRequired;

export default connect(mapStateToProps, mapDispatchToProps)(ExploreDrinksIngredients);
