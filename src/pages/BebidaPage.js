import React, { useContext } from 'react';
import { Redirect } from 'react-router-dom';
import Header from '../components/Header';
import SearchBar from '../components/SearchBar';
import AppContext from '../context/AppContext';

export default function BebidaPage() {
  const { showInput, data } = useContext(AppContext);

  const renderData = () => {
    const ALERT_TEXT = 'Sinto muito, não encontramos nenhuma receita para esses filtros.';
    const RENDER_CONDITION = 11;

    // eslint-disable-next-line no-alert
    if (!data.drinks) return alert(ALERT_TEXT);

    if (data.drinks.length === 1) {
      return <Redirect to={ `/bebidas/${data.drinks[0].idDrink}` } />;
    }
    if (data.drinks.length > 1) {
      return (
        <div>
          {data.drinks.map((drink, index) => index <= RENDER_CONDITION && (
            <div key={ index } data-testid={ `${index}-recipe-card` }>
              <img
                data-testid={ `${index}-card-img` }
                alt={ drink.strDrink }
                src={ drink.strDrinkThumb }
              />
              <h3 data-testid={ `${index}-card-name` }>{drink.strDrink}</h3>
            </div>))}
        </div>
      );
    }
  };

  return (
    <div>
      <Header text="Bebidas" lupa />
      {showInput && <SearchBar type="drink" />}
      { data ? renderData() : <p>faca uma pesquisa</p> }
    </div>
  );
}
