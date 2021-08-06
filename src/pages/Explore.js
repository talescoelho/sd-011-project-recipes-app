import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import { Header, Footer } from '../components';

export default class Explore extends Component {
  render() {
    return (
      <div>
        <Header title="Explorar" search={ false } />
        <Link to="/explorar/comidas">
          <Button
            variant="outline-secondary"
            data-testid="explore-food"
          >
            Explorar Comidas
          </Button>
        </Link>
        <Link to="/explorar/bebidas">
          <Button
            variant="outline-secondary"
            data-testid="explore-drinks"
          >
            Explorar Bebidas
          </Button>
        </Link>
        <Footer />
      </div>
    );
  }
}
