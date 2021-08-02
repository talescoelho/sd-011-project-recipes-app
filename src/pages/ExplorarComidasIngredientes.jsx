import React, { Component } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';

class ExplorarComidasIngredientes extends Component {
  render() {
    const title = 'Explorar Ingredientes';
    const lupa = 'desligado';
    return (
      <main>
        <Header
          title={ title }
          lupa={ lupa }
        />
        <Footer />
      </main>
    );
  }
}

export default ExplorarComidasIngredientes;
