import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Cards from '../components/Cards';

// Usei o history para pegar o caminho da rota e fazer a condição

export default function Recipes() {
  const { pathname } = useHistory().location;
  const [title, setTitle] = useState('');

  useEffect(() => {
    if (pathname.includes('comidas')) setTitle('Comidas');
    if (pathname.includes('bebidas')) setTitle('Bebidas');
  }, [pathname]);

  return (
    <div>
      <Header title={ title } search />
      <h1>Receitas</h1>
      <Cards ApiCallMeals ApiCallCockTails={ false } />
      <Footer />
    </div>
  );
}
