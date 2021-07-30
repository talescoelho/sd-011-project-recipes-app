import React, { Component } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';

class ExplorarComidasIngredientes extends Component {
  render() {
    const title = 'Explorar Ingredientes';
    const search = 'off';
    return (
      <main>
        <Header
          title={ title }
          search={ search }
        />
        <Footer />
      </main>
    );
  }
}

export default ExplorarComidasIngredientes;
