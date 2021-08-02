import React, { Component } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';

class ExplorarBebidas extends Component {
  render() {
    const title = 'Explorar Bebidas';
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

export default ExplorarBebidas;
