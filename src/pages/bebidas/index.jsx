import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import Header from '../../components/Header';

class Bebidas extends Component {
  render() {
    const { allRecipes } = this.props;
    if (allRecipes.length === 1) {
      return <Redirect to={ `/bebidas/${allRecipes[0].idDrink}` } />;
    }
    return (
      <div>
        <Header title="Bebidas" mode="bebidas" hasSearchBar />
        Main Bebidas
        {allRecipes.map((item) => (
          <div>
            {item.idDrink}
          </div>
        ))}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  allRecipes: state.recipes.allRecipes,
});

export default connect(mapStateToProps)(Bebidas);
