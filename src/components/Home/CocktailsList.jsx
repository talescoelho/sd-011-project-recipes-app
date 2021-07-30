import React from 'react';
import { useCocktails } from '../../hooks';

function CocktailsList() {
  const { isLoading, error, cocktails } = useCocktails();
  if (isLoading) {
    return (
      <p>...carregando</p>
    );
  }
  if (error) {
    return (
      <p>deu errado filhao</p>
    );
  }
  if (!cocktails) {
    return (
      <p>Não foi possivel encontrar nada tente outro termo</p>
    );
  }
  return (
    <ol>
      {console.log(cocktails)}
    </ol>
  );
}

export default CocktailsList;
