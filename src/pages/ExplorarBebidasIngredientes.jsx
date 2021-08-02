import React, { Component } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';

class ExplorarBebidasIngredientes extends Component {
  render() {
    const title = 'Explorar Ingredientes';
    const lupa = 'desligada';
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

export default ExplorarBebidasIngredientes;
