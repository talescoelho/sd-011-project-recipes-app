import React, { Component } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default class ExploreDrinksIngredients extends Component {
  render() {
    return (
      <div>
        <Header title="Explorar Ingredientes" search={ false } />
        Explorar bebidas por ingredientes
        <Footer />
      </div>
    );
  }
}
