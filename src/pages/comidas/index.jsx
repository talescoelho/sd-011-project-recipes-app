import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import Footer from '../../components/Footer';
import Header from '../../components/Header';

const TWELVE = 12;

class Comidas extends Component {
  render() {
    let { allRecipes } = this.props;
    allRecipes = allRecipes.slice(0, TWELVE);
    if (allRecipes.length === 1) {
      return (
        <Redirect to={ `/comidas/${allRecipes[0].idMeal}` } />
      );
    }
    return (
      <div>
        <Header title="Comidas" mode="comidas" hasSearchBar />
        Main Comidas
        {allRecipes.map((item, index) => (
          <div
            data-testid={ `${index}-recipe-card` }
            key={ item.idMeal }
          >
            <img
              alt="food"
              src={ item.strMealThumb }
              data-testid={ `${index}-card-img` }
            />
            <span
              data-testid={ `${index}-card-name` }
            >
              {item.strMeal}
            </span>
          </div>
        ))}
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  allRecipes: state.recipes.allRecipes,
});

Comidas.propTypes = {
  allRecipes: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default connect(mapStateToProps)(Comidas);
