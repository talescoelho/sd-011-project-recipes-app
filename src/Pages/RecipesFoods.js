import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import './RecipesFoods.css';
import CardRecipes from '../Components/CardRecipes';
import MyContext from '../Context/MyContext';
import { fetchCategoryMeal, getFood } from '../Services/FetchApi';

export default function RecipesFood() {
  const { cards, setCards } = useContext(MyContext);
  const [mealCategories, setmealCategories] = useState([]);

  const searchCards = async () => {
    const response = await getFood();
    setCards(response.meals);
  };

  const fetchCategoryButtons = async () => {
    const response = await fetchCategoryMeal();
    const maxList = 5;
    const categoryListMeal = response.meals.slice(0, maxList);
    // console.log(categoryListMeal);
    const getListValues = categoryListMeal.map((meal) => Object.values(meal));
    // console.log(getListValues);
    return (
      getListValues,
      setmealCategories(getListValues)
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
        (meals, index) => index < showMaxRecipes,
      );
      return filteredRecipe;
    }
  };

  const fetchBeef = async () => {
    const response = await fetch('https://www.themealdb.com/api/json/v1/1/filter.php?c=Beef');
    const json = await response.json();
    const maxList = 12;
    const filteredJson = json.meals.slice(0, maxList);
    console.log(filteredJson);
    return (
      filteredJson,
      setCards(filteredJson)
    );
  };

  const fetchBreakfast = async () => {
    const response = await fetch('https://www.themealdb.com/api/json/v1/1/filter.php?c=Breakfast');
    const json = await response.json();
    const maxList = 12;
    const filteredJson = json.meals.slice(0, maxList);
    // console.log(filteredJson);
    return (
      filteredJson,
      setCards(filteredJson)
    );
  };

  const fetchChicken = async () => {
    const response = await fetch('https://www.themealdb.com/api/json/v1/1/filter.php?c=Chicken');
    const json = await response.json();
    const maxList = 12;
    const filteredJson = json.meals.slice(0, maxList);
    // console.log(filteredJson);
    return (
      filteredJson,
      setCards(filteredJson)
    );
  };

  const fetchDessert = async () => {
    const response = await fetch('https://www.themealdb.com/api/json/v1/1/filter.php?c=Dessert');
    const json = await response.json();
    const maxList = 12;
    const filteredJson = json.meals.slice(0, maxList);
    // console.log(filteredJson);
    return (
      filteredJson,
      setCards(filteredJson)
    );
  };

  const fetchGoat = async () => {
    const response = await fetch('https://www.themealdb.com/api/json/v1/1/filter.php?c=Goat');
    const json = await response.json();
    const maxList = 12;
    const filteredJson = json.meals.slice(0, maxList);
    // console.log(filteredJson);
    return (
      filteredJson,
      setCards(filteredJson)
    );
  };

  const fetchAll = async () => {
    const response = await fetch('https://www.themealdb.com/api/json/v1/1/categories.php');
    const json = await response.json();
    const maxList = 12;
    const filteredJson = json.categories.slice(0, maxList);
    console.log(filteredJson);
    return (
      filteredJson,
      setCards(filteredJson)
    );
  };

  function handleClick({ value }) {
    switch (value) {
    case 'Beef':
      return fetchBeef();
    case 'Breakfast':
      return fetchBreakfast();
    case 'Chicken':
      return fetchChicken();
    case 'Dessert':
      return fetchDessert();
    case 'Goat':
      return fetchGoat();
    default:
      return alert('Deu Erro na requisição do botão!');
    }
  }

  return (
    <div>
      <Header className="title" title="Comidas" searchIconAppears />
      <div>
        <button
          type="button"
          data-testid="All-category-filter"
          onClick={ () => fetchAll() }
        >
          All
        </button>
        {mealCategories
          .map(
            (item, index) => (
              <button
                type="button"
                data-testid={ `${item}-category-filter` }
                value={ item }
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
              pathname: `/comidas/${recp.idMeal}`,
            } }
          >
            <CardRecipes
              key={ index }
              index={ index }
              thumb={ recp.strMealThumb || recp.strCategoryThumb }
              title={ recp.strMeal || recp.strCategory }
            />
          </Link>))}
      </div>
      <Footer />
    </div>
  );
}
