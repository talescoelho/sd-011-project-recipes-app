import React, { useEffect, useState } from 'react';
import Cards from '../components/Cards';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { fetchCocktailsCategorisAPI } from '../Services/Data';
import '../App.css';

function Bebidas() {
  const [listCocktailsCategorie, setListCocktailsCategorie] = useState([]);
  const [buttonCategorie, setButtonCategorie] = useState(null);

  const renderCards = () => (<Cards
    ApiCallMeals={ false }
    ApiCallCockTails
    categorie={ buttonCategorie }
  />);

  const getDataButton = () => {
    fetchCocktailsCategorisAPI(setListCocktailsCategorie);
    return renderCards;
  };
  useEffect(getDataButton, [buttonCategorie]);
  const renderButtonsCocktails = () => {
    if (listCocktailsCategorie.length > 0) {
      return (
        <div>
          <button
            type="button"
            data-testid={ `${listCocktailsCategorie[0].strCategory}-category-filter` }
            onClick={ () => setButtonCategorie(listCocktailsCategorie[0].strCategory) }
          >
            {listCocktailsCategorie[0].strCategory}
          </button>
          <button
            type="button"
            data-testid={ `${listCocktailsCategorie[1].strCategory}-category-filter` }
            onClick={ () => setButtonCategorie(listCocktailsCategorie[1].strCategory) }
          >
            {listCocktailsCategorie[1].strCategory}

          </button>
          <button
            type="button"
            data-testid={ `${listCocktailsCategorie[2].strCategory}-category-filter` }
            onClick={ () => setButtonCategorie(listCocktailsCategorie[2].strCategory) }
          >
            {listCocktailsCategorie[2].strCategory}

          </button>
          <button
            type="button"
            data-testid={ `${listCocktailsCategorie[3].strCategory}-category-filter` }
            onClick={ () => setButtonCategorie(listCocktailsCategorie[3].strCategory) }
          >
            {listCocktailsCategorie[3].strCategory}

          </button>
          <button
            type="button"
            data-testid={ `${listCocktailsCategorie[4].strCategory}-category-filter` }
            onClick={ () => setButtonCategorie(listCocktailsCategorie[4].strCategory) }
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
      {renderButtonsCocktails()}
      {renderCards()}
      <Footer />
    </div>
  );
}

export default Bebidas;
