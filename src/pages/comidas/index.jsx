import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import * as actions from '../../actions';

const TWELVE = 12;

class Comidas extends Component {
  componentDidMount() {
    const { generalRecipesFood } = this.props;
    generalRecipesFood();
  }

  renderFoods() {
    let { allRecipes } = this.props;
    allRecipes = allRecipes.slice(0, TWELVE);
    if (allRecipes.length === 1) {
      return (
        <Redirect to={ `/comidas/${allRecipes[0].idMeal}` } />
      );
    }
    return allRecipes.map((item, index) => (
      <div
        className="card-item"
        data-testid={ `${index}-recipe-card` }
        key={ item.idMeal }
      >
        <img
          className="img-card"
          alt="food"
          src={ item.strMealThumb }
          data-testid={ `${index}-card-img` }
        />
        <div>
          <span
            data-testid={ `${index}-card-name` }
          >
            {item.strMeal}
          </span>
        </div>
      </div>
    ));
  }

  render() {
    return (
      <div>
        <Header title="Comidas" mode="comidas" hasSearchBar />
        <div className="card-list">
          {this.renderFoods()}
        </div>
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  allRecipes: state.recipes.allRecipes,
});

const mapDispatchToProps = (dispatch) => ({
  generalRecipesFood: () => dispatch(actions.generalRecipesFood()),
});

Comidas.propTypes = {
  allRecipes: PropTypes.arrayOf(PropTypes.object).isRequired,
  generalRecipesFood: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Comidas);
