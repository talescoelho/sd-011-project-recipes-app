import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';
import MyContext from '../context/MyContext';

export default function ExplorerDrinks() {
  const { getRandomDrink } = useContext(MyContext);
  const [id, setId] = useState('');

  useEffect(() => {
    const getId = async () => {
      setId(await getRandomDrink(id));
    };
    getId();
  });

  return (
    <main>
      <Header title="Explorar Bebidas" disable />
      <Link to="/explorar/bebidas/ingredientes">
        <button
          type="button"
          data-testid="explore-by-ingredient"
        >
          Por Ingredientes
        </button>
      </Link>
      <Link to={ `/bebidas/${id}` }>
        <button
          type="button"
          data-testid="explore-surprise"
        >
          Me Surpreenda!
        </button>
      </Link>
      <Footer />
    </main>
  );
}
