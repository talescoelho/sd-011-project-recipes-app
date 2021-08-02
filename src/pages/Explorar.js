import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';

class Explorar extends Component {
  render() {
    const title = 'Explorar';
    const lupa = 'desligada';
    return (
      <div>
        Explorar
        <Header
          title={ title }
          lupa={ lupa }
        />
        <Link to="/explorar/comidas">
          <div>Explorar Comidas</div>
        </Link>
        <Link to="/explorar/bebidas">
          <div>Explorar Bebidas</div>
        </Link>
        <Footer />
      </div>
    );
  }
}

export default Explorar;
