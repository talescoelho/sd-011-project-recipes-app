import React, { Component } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

class Bebidas extends Component {
  constructor() {
    super();

    this.state = {
      title: 'Bebidas',
    };
  }

  render() {
    const { title } = this.state;
    return (
      <main>
        Bebidas
        <Header title={ title } />
        <Footer />
      </main>
    );
  }
}

export default Bebidas;
