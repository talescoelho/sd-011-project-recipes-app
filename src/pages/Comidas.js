import React, { Component } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

class Comidas extends Component {
  constructor() {
    super();
    this.state = {
      title: 'Comidas',
    };
  }

  render() {
    const { title } = this.state;
    return (
      <main>
        <Header title={ title } />
        <Footer />
      </main>
    );
  }
}

export default Comidas;
