import React, { Component } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';

class ExplorarComidas extends Component {
  render() {
    const title = 'Explorar Comidas';
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

export default ExplorarComidas;
