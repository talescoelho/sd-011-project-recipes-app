import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useHistory } from 'react-router';

function Explorar() {
  const history = useHistory();
  return (
    <div>
      <Header title="Explorar" />

      <button
        type="button"
        data-testid="explore-food"
        name="Explorar Comidas"
        onClick={() => {
          history.push('/explorar/comidas');
        }}
      >
        Explorar Comidas
      </button>
      <button
        type="button"
        data-testid="explore-drinks"
        onClick={() => {
          history.push('/explorar/bebidas');
        }}
        name="Explorar Bebidas"
      >
        Explorar Bebidas
      </button>
      <Footer />
    </div>
  );
}

export default Explorar;
//explore-food e explore-drinks.
