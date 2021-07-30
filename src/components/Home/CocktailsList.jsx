import React from 'react';
import { Redirect } from 'react-router-dom';
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
      alert('Sinto muito, não encontramos nenhuma receita para esses filtros.')
    );
  }
  return (
    <ol>
      {console.log(cocktails)}
      {cocktails.length === 1 ? <Redirect
        to={
          `/comidas/${cocktails[0].idDrink}`
        }
      /> : null}
      {cocktails.map((drinks) => (<li key={ drinks.idDrink }>{ drinks.strDrink }</li>))}
    </ol>
  );
}

export default CocktailsList;
