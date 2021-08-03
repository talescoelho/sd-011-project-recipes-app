import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Cards from '../components/Cards';
import { fetchMealsCategorisAPI } from '../Services/Data';
import '../App.css';

// Usei o history para pegar o caminho da rota e fazer a condição

export default function Recipes() {
  const [listMealsCategorie, setListMealsCategorie] = useState([]);
  const [buttonCategorie, setButtonCategorie] = useState(null);

  const renderCards = () => (<Cards
    ApiCallMeals
    ApiCallCockTails={ false }
    categorie={ buttonCategorie }
  />);

  const getDataButton = () => {
    fetchMealsCategorisAPI(setListMealsCategorie);
    return renderCards;
  };
  console.log(buttonCategorie, 'recepies');
  useEffect(getDataButton, [buttonCategorie]);

  const renderButtons = () => {
    if (listMealsCategorie.length > 0) {
      return (
        <div>
          <button
            type="button"
            data-testid={ `${listMealsCategorie[0].strCategory}-category-filter` }
            onClick={ () => setButtonCategorie(listMealsCategorie[0].strCategory) }
          >
            {listMealsCategorie[0].strCategory}
          </button>
          <button
            type="button"
            data-testid={ `${listMealsCategorie[1].strCategory}-category-filter` }
            onClick={ () => setButtonCategorie(listMealsCategorie[1].strCategory) }
          >
            {listMealsCategorie[1].strCategory}

          </button>
          <button
            type="button"
            data-testid={ `${listMealsCategorie[2].strCategory}-category-filter` }
            onClick={ () => setButtonCategorie(listMealsCategorie[2].strCategory) }
          >
            {listMealsCategorie[2].strCategory}

          </button>
          <button
            type="button"
            data-testid={ `${listMealsCategorie[3].strCategory}-category-filter` }
            onClick={ () => setButtonCategorie(listMealsCategorie[3].strCategory) }
          >
            {listMealsCategorie[3].strCategory}

          </button>
          <button
            type="button"
            data-testid={ `${listMealsCategorie[4].strCategory}-category-filter` }
            onClick={ () => setButtonCategorie(listMealsCategorie[4].strCategory) }
          >
            {listMealsCategorie[4].strCategory}

          </button>
        </div>
      );
    }
  };

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
      {renderButtons()}
      {renderCards()}
      <Footer />
    </div>
  );
}
