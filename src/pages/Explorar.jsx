import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import '../App.css';
import Header from '../components/Header';

class Explorar extends Component {
  render() {
    return (
      <div>
        <Header title="Explorar" />
        <div>
          <Link
            to="explorar/comidas"
          >
            <button
              type="button"
              data-testid="explore-food"
            >
              Explorar Comidas
            </button>
          </Link>
          <Link
            to="explorar/bebidas"
          >
            <button
              type="button"
              data-testid="explore-drinks"
            >
              Explorar Bebidas
            </button>
          </Link>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Explorar;
