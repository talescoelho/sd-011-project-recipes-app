import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { drinkIngredients,
  renderDrinkIngredient } from '../redux/actions/drinkActions';
import Header from '../components/Header';
import Footer from '../components/Footer';

class ExploreDrinksIngredients extends Component {
  componentDidMount() {
    const { actionfetchDrinkIngredient } = this.props;
    actionfetchDrinkIngredient();
  }

  renderDrinkIngredient(ingredient) {
    const { history, actionDrinkIngredient } = this.props;
    actionDrinkIngredient(ingredient);
    history.push('/bebidas');
  }

  render() {
    const { fetchDrinkIngredients } = this.props;
    return (
      <div>
        <Header title="Explorar Ingredientes" search={ false } />
        <ul>
          { fetchDrinkIngredients.map((item, index) => (
            <button
              type="button"
              key={ item.strIngredient1 }
              data-testid={ `${index}-ingredient-card` }
              onClick={ () => this.renderDrinkIngredient(item.strIngredient1) }
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
            </button>
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
  actionDrinkIngredient: (ingredient) => dispatch(renderDrinkIngredient(ingredient)),
});

ExploreDrinksIngredients.propTypes = {
  fetchDrinkIngredients: PropTypes.arrayOf(PropTypes.string),
  actionfetchDrinkIngredient: PropTypes.func,
}.isRequired;

export default connect(mapStateToProps, mapDispatchToProps)(ExploreDrinksIngredients);
