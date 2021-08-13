import React, { useEffect, useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import './RecipesFoods.css';
import CardRecipes from '../Components/CardRecipes';
import { fetchCategoryDrink, getDrink } from '../Services/FetchApi';
import MyContext from '../Context/MyContext';

export default function RecipesFood() {
  const { cards, setCards } = useContext(MyContext);
  const [drinkCategories, setdrinkCategories] = useState([]);

  const searchCards = async () => {
    const response = await getDrink();
    setCards(response.drinks);
  };

  const fetchCategoryButtons = async () => {
    const response = await fetchCategoryDrink();
    const maxList = 5;
    const categoryListDrink = response.drinks.slice(0, maxList);
    const getListValues = categoryListDrink.map((drink) => Object.values(drink));
    return (
      getListValues,
      setdrinkCategories(getListValues)
    );
  };

  useEffect(() => {
    searchCards();
    fetchCategoryButtons();
  }, []);

  const renderCardRecipes = () => {
    const showMaxRecipes = 12;
    if (cards) {
      const filteredRecipe = cards.filter(
        (drinks, index) => index < showMaxRecipes,
      );
      return filteredRecipe;
    }
  };

  const fetchOrdinaryDrink = async () => {
    const response = await fetch('https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Ordinary Drink');
    const json = await response.json();
    const maxList = 12;
    const filteredJson = json.drinks.slice(0, maxList);
    return (
      filteredJson,
      setCards(filteredJson)
    );
  };

  const fetchCocktail = async () => {
    const response = await fetch('https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail');
    const json = await response.json();
    // console.log(json);
    const maxList = 12;
    const filteredJson = json.drinks.slice(0, maxList);
    return (
      filteredJson,
      setCards(filteredJson)
    );
  };

  const fetchMilkFloatShake = async () => {
    const response = await fetch('https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Milk / Float / Shake');
    const json = await response.json();
    const maxList = 12;
    const filteredJson = json.drinks.slice(0, maxList);
    return (
      filteredJson,
      setCards(filteredJson)
    );
  };

  const fetchOtherUnknown = async () => {
    const response = await fetch('https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Other/Unknown');
    const json = await response.json();
    const maxList = 12;
    const filteredJson = json.drinks.slice(0, maxList);
    return (
      filteredJson,
      setCards(filteredJson)
    );
  };

  const fetchCocoa = async () => {
    const response = await fetch('https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocoa');
    const json = await response.json();
    const maxList = 12;
    const filteredJson = json.drinks.slice(0, maxList);
    return (
      filteredJson,
      setCards(filteredJson)
    );
  };

  // const fetchAll = async () => {
  //   const response = await fetch('https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list');
  //   const json = await response.json();
  //   console.log(json);
  //   // const maxList = 12;
  //   // const filteredJson = json.drinks.categories.slice(0, maxList);
  //   return (
  //     json
  //     // filteredJson,
  //     // setCards(filteredJson)
  //   );
  // };

  function handleClick({ value }) {
    switch (value) {
    case 'Ordinary Drink':
      return fetchOrdinaryDrink();
    case 'Cocktail':
      return fetchCocktail();
    case 'Milk / Float / Shake':
      return fetchMilkFloatShake();
    case 'Other/Unknown':
      return fetchOtherUnknown();
    case 'Cocoa':
      return fetchCocoa();
    default:
      return alert('Deu Erro na requisição do botão!');
    }
  }

  return (
    <div>
      <Header className="title" title="Bebidas" searchIconAppears />
      <div>
        <button
          type="button"
          data-testid="All-category-filter"
          onClick={ () => getDrink() }
        >
          All
        </button>
        {drinkCategories
          .map(
            (item, index) => (
              <button
                type="button"
                data-testid={ `${item}-category-filter` }
                value={ item }
                id={ item }
                key={ index }
                onClick={ (e) => handleClick(e.target) }
              >
                {item}
              </button>),
          )}
      </div>
      <div className="cardlist">
        {cards.length > 0 && renderCardRecipes().map((recp, index) => (
          <Link
            className="link"
            key={ index }
            to={ {
              pathname: `/bebidas/${recp.idDrink}`,
            } }
          >
            <CardRecipes
              key={ index }
              index={ index }
              thumb={ recp.strDrinkThumb || recp.strCategoryThumb }
              title={ recp.strDrink || recp.strCategory }
            />
          </Link>))}
      </div>
      <Footer />
    </div>
  );
}
