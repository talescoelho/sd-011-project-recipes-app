import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import Header from '../../components/Header';

class Comidas extends Component {
  render() {
    const { allRecipes } = this.props;
    if (allRecipes.length === 1) {
      return (
        <Redirect to={ `/comidas/${allRecipes[0].idMeal}` } />
      );
    }
    return (
      <div>
        <Header title="Comidas" mode="comidas" hasSearchBar />
        Main Comidas
        {allRecipes.map((item) => (
          <div key={ item.idMeal }>
            {item.idMeal}
          </div>
        ))}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  allRecipes: state.recipes.allRecipes,
});

export default connect(mapStateToProps)(Comidas);
