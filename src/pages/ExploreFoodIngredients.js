import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { foodIngredient } from '../redux/actions/foodActions';
import Header from '../components/Header';
import Footer from '../components/Footer';

class ExploreFoodIngredients extends Component {
  componentDidMount() {
    const { actionfetchFoodIngredient } = this.props;
    actionfetchFoodIngredient();
  }

  render() {
    const { fetchFoodIngredient } = this.props;
    return (
      <div>
        <Header />
        <ul>
          { fetchFoodIngredient.map((item, index) => (
            <li
              key={ item.idIngredient }
              data-testid={ `${index}-ingredient-card` }
            >
              <img
                src={ `https://www.themealdb.com/images/ingredients/${item.strIngredient}-Small.png` }
                alt="Food Ingredients"
                data-testid={ `${index}-card-img` }
                height="200px"
                width="200px"
              />
              <p data-testid={ `${index}-card-name` }>{ item.strIngredient }</p>
            </li>
          ))}
        </ul>
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  fetchFoodIngredient: state.foodReducer.foodIngredients,
});

const mapDispatchToProps = (dispatch) => ({
  actionfetchFoodIngredient: () => dispatch(foodIngredient()),
});

ExploreFoodIngredients.propTypes = {
  fetchFoodIngredient: PropTypes.arrayOf(PropTypes.string),
  actionfetchFoodIngredient: PropTypes.func,
}.isRequired;

export default connect(mapStateToProps, mapDispatchToProps)(ExploreFoodIngredients);
