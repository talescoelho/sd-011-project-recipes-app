import React, { Component } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default class ExploreFoodIngredients extends Component {
  render() {
    return (
      <div>
        <Header title="Explorar Ingredientes" search={ false } />
        Explorar comidas por ingredientes
        <Footer />
      </div>
    );
  }
}
