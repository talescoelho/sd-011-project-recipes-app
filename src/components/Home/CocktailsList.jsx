import React, { useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import { useCocktails } from '../../hooks';

function CocktailsList() {
  const { isLoading, error, cocktails } = useCocktails();

  useEffect(() => {
    if (!cocktails) {
      alert('Sinto muito, não encontramos nenhuma receita para esses filtros.');
    }
  }, [cocktails]);

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

  const magicalNumber = 12;

  return (
    <ol>
      {cocktails && cocktails.length === 1 && <Redirect
        to={
          `/bebidas/${cocktails[0].idDrink}`
        }
      />}
      {cocktails && cocktails.slice(0, magicalNumber).map((drinks, index) => (
        <li data-testid={ `${index}-recipe-card` } key={ drinks.idDrink }>
          <img
            alt={ `Foto de uma ${drinks.strDrink}` }
            data-testid={ `${index}-card-img` }
            src={ drinks.strDrinkThumb }
          />
          <h3
            data-testid={ `${index}-card-name` }
          >
            { drinks.strDrink }
          </h3>

        </li>))}
    </ol>
  );
}

export default CocktailsList;
