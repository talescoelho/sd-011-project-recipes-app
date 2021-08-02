import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';

class Explorar extends Component {
  render() {
    const title = 'Explorar';
    return (
      <main>
        Explorar
        <Header
          title={ title }
        />
        <Link to="/explorar/comidas">
          <div>Explorar Comidas</div>
        </Link>
        <Link to="/explorar/bebidas">
          <div>Explorar Bebidas</div>
        </Link>
        <Footer />
      </main>
    );
  }
}

export default Explorar;
