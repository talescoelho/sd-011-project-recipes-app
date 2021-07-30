import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Header from '../components/Header';

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
    </div>
  );
}
