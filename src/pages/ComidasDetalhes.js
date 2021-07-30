import React, { Component } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';

class ComidasDetalhes extends Component {
  render() {
    const lupa = 'desligado';
    return (
      <div>
        <h1>Detalhes de Comida</h1>
        <Header lupa={ lupa } />
        <Footer />
      </div>
    );
  }
}

export default ComidasDetalhes;
