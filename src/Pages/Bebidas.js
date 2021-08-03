import React, { useEffect, useState } from 'react';
import Cards from '../components/Cards';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { fetchCocktailsCategorisAPI } from '../Services/Data';
import '../App.css';

function Bebidas() {
  const [listCocktailsCategorie, setListCocktailsCategorie] = useState([]);

  const getData = () => {
    const dataReceived = fetchCocktailsCategorisAPI(setListCocktailsCategorie);
    return dataReceived;
  };

  useEffect(getData, []);
  const renderButtons = () => {
    if (listCocktailsCategorie.length > 0) {
      return (
        <div>
          <button
            type="button"
            data-testid={ `${listCocktailsCategorie[0].strCategory}-category-filter` }
          >
            {listCocktailsCategorie[0].strCategory}
          </button>
          <button
            type="button"
            data-testid={ `${listCocktailsCategorie[1].strCategory}-category-filter` }
          >
            {listCocktailsCategorie[1].strCategory}

          </button>
          <button
            type="button"
            data-testid={ `${listCocktailsCategorie[2].strCategory}-category-filter` }
          >
            {listCocktailsCategorie[2].strCategory}

          </button>
          <button
            type="button"
            data-testid={ `${listCocktailsCategorie[3].strCategory}-category-filter` }
          >
            {listCocktailsCategorie[3].strCategory}

          </button>
          <button
            type="button"
            data-testid={ `${listCocktailsCategorie[4].strCategory}-category-filter` }
          >
            {listCocktailsCategorie[4].strCategory}

          </button>
        </div>
      );
    }
  };

  return (
    <div>
      <Header title="Bebidas" />
      {renderButtons()}
      <Cards ApiCallMeals={ false } ApiCallCockTails />
      <Footer />
    </div>
  );
}

export default Bebidas;
