import React, { Component } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';

class Explorar extends Component {
  render() {
    const title = 'Explorar';
    const search = 'off';
    return (
      <main>
        Explorar
        <Header
          title={ title }
          search={ search }
        />
        <Footer />
      </main>
    );
  }
}

export default Explorar;
