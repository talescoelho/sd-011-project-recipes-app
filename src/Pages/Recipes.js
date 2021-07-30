import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Cards from '../components/Cards';
import Header from '../components/Header';

// Usei o history para pegar o caminho da rota e fazer a condição

export default function Recipes() {
  const { pathname } = useHistory().location;
  const [title, setTitle] = useState('');
  const [pageMeail] = useState(true);
  const [pageCocktails] = useState(false);

  useEffect(() => {
    if (pathname.includes('comidas')) setTitle('Comidas');
    if (pathname.includes('bebidas')) setTitle('Bebidas');
  }, [pathname]);

  return (
    <div>
      <Header title={ title } search />
      <h1>Receitas</h1>
      <Cards pageMeail={ pageMeail } pageCocktails={ pageCocktails } />
    </div>

  );
}
