import React from 'react';
import { useHistory } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { SearchBarProvider } from '../context/SearchBar';

export default function Explorer() {
  const history = useHistory();
  return (
    <>
      <SearchBarProvider>
        <Header title="Explorar" />
      </SearchBarProvider>
      <button
        type="button"
        data-testid="explore-food"
        onClick={ () => history.push('/explorar/comidas') }
      >
        Explorar Comidas
      </button>
      <button
        type="button"
        data-testid="explore-drinks"
        onClick={ () => history.push('/explorar/bebidas') }
      >
        Explorar Bebidas
      </button>
      <Footer />
    </>
  );
}
