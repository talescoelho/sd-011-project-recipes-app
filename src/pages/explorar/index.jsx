import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../../components/Footer';
import Header from '../../components/Header';

export default class Explorar extends Component {
  render() {
    return (
      <div>
        <Header title="Explorar" />
        <main>
          <Link to="/explorar/comidas">
            <button
              type="button"
              data-testid="explore-food"
            >
              Explorar Comidas
            </button>
          </Link>
          <Link to="/explorar/bebidas">
            <button
              type="button"
              data-testid="explore-drinks"
            >
              Explorar Bebidas
            </button>
          </Link>
        </main>
        <Footer />
      </div>
    );
  }
}
