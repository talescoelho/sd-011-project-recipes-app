import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import * as actions from '../../actions';

const TWELVE = 12;

class Bebidas extends Component {
  componentDidMount() {
    const { generalRecipesDrink } = this.props;
    generalRecipesDrink();
  }

  renderDrinks() {
    let { allRecipes } = this.props;
    allRecipes = allRecipes.slice(0, TWELVE);
    if (allRecipes.length === 1) {
      return (
        <Redirect to={ `/bebidas/${allRecipes[0].idDrink}` } />
      );
    }
    return allRecipes.map((item, index) => (
      <div
        className="card-item"
        data-testid={ `${index}-recipe-card` }
        key={ item.idDrink }
      >
        <img
          className="img-card"
          alt="drinks"
          src={ item.strDrinkThumb }
          data-testid={ `${index}-card-img` }
        />
        <div>
          <span
            data-testid={ `${index}-card-name` }
          >
            {item.strDrink}
          </span>
        </div>
      </div>
    ));
  }

  render() {
    return (
      <div>
        <Header title="Bebidas" mode="bebidas" hasSearchBar />
        <div className="card-list">
          {this.renderDrinks()}
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
  generalRecipesDrink: () => dispatch(actions.generalRecipesDrink()),
});

Bebidas.propTypes = {
  allRecipes: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Bebidas);
