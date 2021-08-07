import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import Header from '../components/Header';
import '../styles/Explore.css';
import Footer from '../components/Footer';

export default function Explore() {
  return (
    <>
      <Header pageName="Explorar" />
      <main className="explore-buttons">
        <Link to="/explorar/comidas">
          <Button
            data-testid="explore-food"
            type="button"
            className="explore-button"
          >
            Explorar Comidas
          </Button>
        </Link>
        <Link to="/explorar/bebidas">
          <Button
            data-testid="explore-drinks"
            type="button"
            className="explore-button"
          >
            Explorar Bebidas
          </Button>
        </Link>
      </main>
      <Footer />
    </>
  );
}
