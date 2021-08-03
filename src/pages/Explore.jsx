import React from 'react';
import { useHistory } from 'react-router';
import LowerMenu from '../components/LowerMenu';
import Header from '../components/Header';

function Explore() {
  const history = useHistory();
  return (
    <>
      <Header />
      <div className="ex">
        <button
          data-testid="explore-food"
          type="button"
          onClick={ () => history.push('/explorar/comidas') }
        >
          Explorar Comidas
        </button>
        <button
          data-testid="explore-drinks"
          type="button"
          onClick={ () => history.push('/explorar/bebidas') }
        >
          Explorar Bebidas
        </button>
      </div>
      <LowerMenu />
    </>
  );
}

export default Explore;
