import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import fetchByFilter from '../services/data';

/* Criei CardsList para renderizar apenas uma vez. Deixei apenas o SearchBarProvider encapsulando o Header e CardsList, já que buscam as mesmas informações */

export default function CardsListByIngredient(props) {
  const [ingredName, setIngredName] = useState([]);
  const [imge, setImge] = useState([]);
  const path = window.location.pathname.split('/')[2];

  useEffect(() => {
    const urlDrink = 'thecocktaildb';
    const urlMeal = 'themealdb';
    let url = urlMeal;
    if (path === 'bebidas') {
      url = urlDrink;
    }
    const getRecipes = async () => {
      const urlToFetch = `https://www.${url}.com/api/json/v1/1/list.php?i=list`;
      const recipesFromApi = await fetchByFilter(urlToFetch);
      const recipesList = Object.values(recipesFromApi)[0];
      const array = recipesList.map((e) => (e.strIngredient1.toLowerCase()));
      setIngredName(array);
      // setDataValues(recipesList);
      // setDataList(recipesList);
      // setShouldCallCards(true);
    };

    getRecipes();
  }, [path]);

  useEffect(() => {
    const urlDrink = 'thecocktaildb';
    const urlMeal = 'themealdb';
    let url = urlMeal;
    if (path === 'bebidas') {
      url = urlDrink;
    }
    const getCategories = async () => {
      const img = ingredName.map((e) => ({
        fig: `https://www.${url}.com/images/ingredients/${e}.png`,
        name: `${e}`,
      }));
      const imgTwelve = img.slice(0, 12);
      setImge(imgTwelve);
      // const categoriesFromApi = await fetchByFilter(urlToFetch);
      // const categoriesList = Object.values(categoriesFromApi)[0];
    };

    getCategories();
  }, [path, ingredName]);

  return (
    <div>
      {console.log(imge)}
      { imge.map((e) => (
        <div>
          <img width="50px" src={ e.fig } alt="figure" />
          <p>{e.name}</p>
        </div>
      )) }
    </div>
  );
}

CardsListByIngredient.propTypes = {
  fetchType: PropTypes.string,
}.isRequired;
