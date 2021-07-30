import React, { Component } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';

class ExplorarComidasArea extends Component {
  render() {
    const title = 'Explorar Origem';
    const search = 'on';
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

export default ExplorarComidasArea;
