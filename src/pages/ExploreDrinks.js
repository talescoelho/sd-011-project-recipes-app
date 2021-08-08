import React, { Component } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default class ExploreDrinks extends Component {
  render() {
    return (
      <div>
        <Header title="Explorar Bebidas" search={ false } />
        Explorar bebidas
        <Footer />
      </div>
    );
  }
}
