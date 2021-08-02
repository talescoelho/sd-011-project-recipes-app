import React, { Component } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';

class ExplorarBebidas extends Component {
  render() {
    const title = 'Explorar Bebidas';
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

export default ExplorarBebidas;
