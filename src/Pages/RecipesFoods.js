import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import './RecipesFoods.css';
import CardRecipes from '../Components/CardRecipes';
import MyContext from '../Context/MyContext';
import { fetchCategoryFood, getFood } from '../Services/FetchApi';

export default function RecipesFood() {
  const { cards, setCards } = useContext(MyContext);
  const [mealCategories, setmealCategories] = useState([]);
  // const [state, setstate] = useState('All');

  const searchCards = async () => {
    const response = await getFood();
    setCards(response.meals);
  };

  const fetchCategoryButtons = async () => {
    const response = await fetchCategoryFood('meal', 'list');
    const maxList = 5;
    const categoryListMeal = response.meals.slice(0, maxList);
    console.log(categoryListMeal);
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

  function handleClick(category) {
    const filteredCategory = 
    fetchCategoryFood('meal', category);
    setCards
  }

  return (
    <div>
      <Header className="title" title="Comidas" searchIconAppears />
      <div>
        <button
          type="button"
          data-testid="All-category-filter"
          onClick={ () => getFood() }
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
                onClick={ () => handleClick(item) }
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
