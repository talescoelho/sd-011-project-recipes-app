import React, { Component } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';

class Perfil extends Component {
  render() {
    const title = 'Explorar Origem';
    const lupa = 'desligado';
    return (
      <div>
        <h1 data-testid="page-title">Perfil</h1>
        <Header
          title={ title }
          lupa={ lupa }
        />
        <Footer />
      </div>
    );
  }
}

export default Perfil;
