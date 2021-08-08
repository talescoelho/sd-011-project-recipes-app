import React, { Component } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default class ExploreFoods extends Component {
  render() {
    return (
      <div>
        <Header title="Explorar Comidas" search={ false } />
        Explorar comidas
        <Footer />
      </div>
    );
  }
}
