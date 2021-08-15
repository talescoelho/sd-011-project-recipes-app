import React from 'react';
import { useHistory } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Button } from '../styles';

export default function Explore() {
  const history = useHistory();
  return (
    <div>
      <Header title="Explorar" />
      <div className="d-flex flex-column p-2">
        <Button
          type="button"
          className="btn m-3 border btn-lg border-dark"
          data-testid="explore-food"
          onClick={ () => history.push('/explorar/comidas') }
        >
          Explorar Comidas
        </Button>
        <Button
          type="button"
          className="btn m-3 border btn-lg border-dark"
          data-testid="explore-drinks"
          onClick={ () => history.push('/explorar/bebidas') }
        >
          Explorar Bebidas
        </Button>
      </div>
      <Footer />
    </div>
  );
}
